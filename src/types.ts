export type Image = {
  date: string;
  copyright: string;
  imageid: number;
  idsid: number;
  format: string;
  description: string | null;
  technique: string;
  renditionnumber: string;
  displayorder: number;
  baseimageurl: string;
  alttext: string | null;
  width: number;
  publiccaption: string | null;
  iiifbaseuri: string;
  height: number;
};

export type ArtRecord = {
  images: Image[];
  century: string;
  culture: string;
  imagepermissionlevel: number;
  id: number;
  classification: string;
  title: string;
};

export type SearchInfo = {
  totalrecordsperquery: number;
  totalrecords: number;
  pages: number;
  page: number;
  next: string;
};
