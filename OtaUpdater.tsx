import React, { useEffect, useRef, useState } from "react";
import { useInaccurateTimestamp } from "react-native-use-timestamp";
import * as Updates from "expo-updates";
import { Portal, Snackbar } from "react-native-paper";

async function checkForUpdates(): Promise<string> {
  const update = await Updates.checkForUpdateAsync();
  if (!update?.isAvailable) {
    throw new Error("No updates available");
  }

  const result = await Updates.fetchUpdateAsync();

  if (!result?.isNew) {
    throw new Error("Fetched update is not new");
  }

  // Using the "extra": { "update-message": "..." } from app.json
  // @ts-ignore
  return result?.manifest?.extra["update-message"];
}

// How often do we want to render?
const INTERVAL_RENDER = 1000 * (__DEV__ ? 10 : 60);

// How often should it actually check for an update?
// Check for 5min but later we need to 20min
//TODO:- 1000 * 60 *15
const INTERVAL_OTA_CHECK = 1000 * 5 * 10;

export function OtaUpdater() {
  const now = useInaccurateTimestamp({ every: INTERVAL_RENDER });

  const isMounted = useRef(true);
  const [updateIsAvailable, setUpdateAvailable] = useState(false);

  // Setting this to initially zero means there will _always_ be a check on
  // mount, which is nice, because that means a check when the app starts.
  const lastUpdate = useRef(0);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (updateIsAvailable) {
      return;
    }

    if (now - lastUpdate.current < INTERVAL_OTA_CHECK) {
      return;
    }

    lastUpdate.current = now;

    checkForUpdates()
      .then(() => {
        isMounted.current && setUpdateAvailable(true);
      })
      .catch((_reason) => {
        /* you can inspect _reason */
      });
  }, [now]);

  return (
    <Portal>
      <Snackbar
        visible={updateIsAvailable}
        onDismiss={() => {}}
        action={{
          label: "Apply update",
          onPress: () => {
            Updates.reloadAsync();
          },
        }}
      >
        Hey there! We got an update for you 🥳🎉.
      </Snackbar>
    </Portal>
  );
}
