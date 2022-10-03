import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import Progress from "../../components/Progress/Progress";
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from "react-router-dom";

// FIREBASE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [Productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getProductos = async () => {
    const q = query(collection(db, "oscuro"));
    const docs = [];
    const querySnapshot = await getDocs(
      id ? query(q, where("category", "==", id)) : q
    );

    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    setProductos(docs);
    setLoading(false);
  };

  useEffect(() => {
    getProductos();
  }, [id]);

  return (
    <div className="ItemList">
      {loading ? (
        <Progress />
      ) : (
        <div>
          <ItemList Productos={Productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
