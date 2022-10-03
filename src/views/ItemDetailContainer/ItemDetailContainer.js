import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Progress from '../../components/Progress/Progress';
import { useParams } from 'react-router-dom';


// FIREBASE
import { collection, query, getDocs, documentId, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

function ItemDetailContainer() {

    const [Productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();


    const getProductos = async () => {
		const q = query(
			collection(db, 'oscuro'), where(documentId(), '==', id)
		);
		const docs = [];
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		setProductos(docs);
        setLoading(false)
	};

    useEffect(() => {
		getProductos();
	}, [id]);

    return (
    <div>
        {
            loading
            ?
            <Progress/>
            :
            Productos.map((Productos) => {
				return (
					<div key={Productos.id}>
						<ItemDetail Productos={Productos} />
					</div>
				);
			})
        }
    </div>
    );
};

export default ItemDetailContainer;