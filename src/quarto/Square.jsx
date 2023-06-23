

export default function Square({children}) {
    
    const style = {
        width: "100%", 
        height: "100%"
    };

    return (
        <>
            <div >
                {children}
            </div>
        </>
    );
}