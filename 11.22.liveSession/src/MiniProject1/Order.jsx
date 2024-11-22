

import React, { useState } from "react"
import OrderHistory from "./OrderHistory";

// 상품의 리스트 초기값을 관리
const productInitData = [
  {
    id:1,
    name: "발난로",
    price: 10_000,
    quantity: 10,
  },
  {
    id:2,
    name: "손난로",
    price: 30_000,
    quantity: 30,
  },
  {
    id:3,
    name: "옛날식 석유 난로",
    price: 100_000,
    quantity: 5,
  },
  {
    id:4,
    name: "전기 난로",
    price: 500_000,
    quantity: 3,
  },
]

// 주문 컴포넌트
const Order = () => {
  //상품 리스트
  const [products, setProducts] = useState([productInitData])

  //주문 내역 리스트
  const [orders, setOrders] = useState([])

  // 재고 관리하는 함수
  const decrementQuantity = (product) => {
    setProducts(
      products.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  // 주문하기
  const handleOrder = (product) => {
    if (product.quantity <= 0){
      alert("상품의 재고가 없습니다.")
      return
    }

    //재고관리
    decrementQuantity(product)

    // 주문 내역 추가
    setOrders(
      ...orders,
      {
        id: Math.random,
        products: product,
        quantity: 1,
        address: "서울",
        shippingType: 0,
      },
    )
  }





  return (
    <div>
      <h1>상품 리스트</h1>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>재고량</th>
            <th>주문</th>
            <th>기능</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}원</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleOrder(product)}>주문하기</button>
              </td>
              <td>
                <button onClick={() => {}}>장바구니담기</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <br />
        <OrderHistory orders={orders} setOrders={setOrders} />
        
    </div>
  );
}

export default Order