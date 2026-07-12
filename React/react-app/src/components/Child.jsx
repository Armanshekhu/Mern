function Child({name}) {
    return (
        <>
        <h2> This is child component</h2>
        <GrandChild name={name}/>
        </>
    )
}

export default Child;