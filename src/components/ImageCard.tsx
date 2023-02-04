export default function ImageCard(props: any) {
    return (
        <div className="mx-1 my-3 border border-gray-300 max-w-sm rounded overflow-hidden shadow-lg">
            <img className=" w-full" src={props.src} key={props.src} alt="dog_images" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
    )
}