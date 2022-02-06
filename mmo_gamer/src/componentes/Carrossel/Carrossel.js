import { Carousel } from 'react-carousel-minimal';


export const Carrossel = ({ screenshots, title }) => {
    const data = screenshots.map((img) => {
        return { image: img.image, caption: title }
    })

    return (
        <>
            {data.length > 0 && (
                <Carousel
                    data={data}
                    time={2000}
                    width="850px"
                    height="500px"
                    radius="10px"
                    offsetWidth="0"
                    slideNumber={true}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        margin: "40px auto 80px",
                    }}
                />)}
        </>
    )
}