interface PhotoPageProps {
  params: {
    id: number
    photoId: number
  }
}

const PhotoPage = ({ params: { id, photoId } }: PhotoPageProps) => {
  return (
    <>
      <h1>PhotoPage</h1>
      <p>UserID: {id}</p>
      <p>PhotoID: {photoId}</p>
    </>
  )
}

export default PhotoPage
