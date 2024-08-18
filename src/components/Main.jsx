export default function Main(props) {
    const {data} = props

    function mediaType(){
        return data.media_type === "image"? data.hdurl: data.thumbnail_url
    }

    return (
        <div className="imgContainer">
            <img className="bgImage" src={mediaType()} alt={data.title||'bgImage'} />:
        </div>
    )
}
