const NotFound = () => {
  let image ="https://qph.cf2.quoracdn.net/main-qimg-a26c3f86d5712af85268c86a8b387cb2.webp";
  return (
    <div
      className="notfound">
        <img src={image} alt="notfound" style={{height:"100vh",width:"100%"}}/>
      </div>
  );
};

export default NotFound;
