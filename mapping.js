return (
    <div>
        {
            datas.map(data =>
                <div key={data._id}>
                    <p >index: {data._id}</p>
                    <p>isActive: {data.isActive}</p>
                    <p>guid: {data.guid}</p>
                </div>
            )
        }
    </div>
);