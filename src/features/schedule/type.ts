export enum MeetingTypes {
  Team = 'team',
  Business = 'business',
  Personal = 'personal',
}

export type Meeting = {
  type: MeetingTypes;
  title: string;
  date: string;
  time: string;
  place: string;
  people?: string;
};
