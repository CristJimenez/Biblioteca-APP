export interface IBook {
    authors: {name: string, birth_year: number, death_year: number}[],
    bookshelves: string[],
    copyright: boolean | null,
    download_count: number,
    formats: Format,
    id: number,
    languages: string[],
    media_type: string,
    subjects: string[],
    summaries: string[],
    title: string,
    translators: {name: string, birth_year: number, death_year: number}[],
}

interface Format {
    [mimeType: string]: string,
}