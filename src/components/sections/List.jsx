function List({ listData, onItemClick, propName }) {
    return (
        <>
            {listData.map((item) => (
                <button
                    className="rounded-md border  p-2 text-left text-base font-semibold shadow-sm transition hover:border-sky-300"
                    key={item.id}
                    onClick={() => onItemClick(item)}
                >
                    {item[propName]}
                </button>
            ))}
        </>
    );
}

export default List;
