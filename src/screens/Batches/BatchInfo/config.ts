export interface Player {
  playerid: string;
  name: string;
}

export interface BatchDetail {
  batch_name: string;
  coach_id: string;
  description: string;
  players: Player[];
  _id: string;
}
