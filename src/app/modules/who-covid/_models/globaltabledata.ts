export interface GlobalTableData {
  Name: string;
  WHORegion: string;
  Casescumulativetotal: number;
  Casescumulativetotalper100000population: number;
  Casesnewlyreportedinlast7days: number;
  Casesnewlyreportedinlast7daysper100000population: number;
  Casesnewlyreportedinlast24hours: number;
  Deathscumulativetotal: number;
  Deathscumulativetotalper100000population: number;
  Deathsnewlyreportedinlast7days: number;
  Deathsnewlyreportedinlast7daysper100000population: number;
  Deathsnewlyreportedinlast24hours: number;
}
// csv first line remove spaces and '-'
