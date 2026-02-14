export const ShowTasks = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
      }}
    >
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid gray",
          paddingBottom: "10px",
          boxShadow: "1px 1px 10px 1px #b9b9b9",
          padding: "10px 20px",
          borderRadius: "10px",
        }}
      >
        <p
          style={{
            width: "70%",
          }}
        >
          Lorem, ipsum.
        </p>
        <button
          style={{
            border: "1px solid #676767",
            borderRadius: "7px",
            padding: "0px 20px",
            backgroundColor: "blue",
            color: "white",
            marginRight: "10px",
          }}
        >
          Done
        </button>

        <button
          style={{
            border: "1px solid #676767",
            borderRadius: "7px",
            padding: "0px 20px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
