export type Path = string

export interface Entry {
  name: string
  size: number

  lastModified: number
  dateCreated: number

  isDirectory: boolean
}

export interface FileSystemAdapter {
  allDirectories(signal: AbortSignal): Promise<Path[]>
  readDirectory(path: Path, signal: AbortSignal): Promise<Entry[]>
}
