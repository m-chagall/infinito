export default function Top({showBanner, setShowBanner}) {
    if (showBanner) {
        return (
            <><div className="py-14"></div></>
        )
    } else return (
        <><div className="py-8"></div></>
    )
    
}