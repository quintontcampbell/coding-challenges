function songDecoder(song){
  const regex = /wub/gi
  const noWubs = song.replace(regex,' ')
  return noWubs.replace(/\s+/g, " ").trimLeft().trimRight()
}

//gotta take out the WUB's and replace them with spaces