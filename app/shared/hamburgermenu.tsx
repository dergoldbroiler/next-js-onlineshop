'use client'
const Hamburgermenu = ({handleNavigationLayer}: {handleNavigationLayer: () => void}) => {

    return (
        <div className="hamburgermenu"  onClick={handleNavigationLayer}>
            <input type="checkbox" id="hamburg"/>
            <label className="hamburg">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </label>
        </div>
    )
}

export default Hamburgermenu;