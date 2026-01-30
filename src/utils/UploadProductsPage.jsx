import { useEffect, useState } from "react";
import { uploadProducts } from "./uploadProducts";

function UploadProductsPage() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    uploadProducts().then(() => {
      setDone(true);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {done ? (
        <>
          <h2>Productos subidos correctamente</h2>
          <p>Ya podés volver a la tienda.</p>
        </>
      ) : (
        <h2>Subiendo productos mágicos...</h2>
      )}
    </div>
  );
}

export default UploadProductsPage;