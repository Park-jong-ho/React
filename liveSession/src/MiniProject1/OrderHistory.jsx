import React from "react"

const OrderHistory = ({orders, setOrders}) => {
  const currentTime = new Date().toLocaleString()

  // 배송 완료 처리 함수
  const handleShippingCompleted = (order) => {
    setOrders(
      orders.map(ord => 
        ord.id === order.id ? {...ord, shippingType: 1} : ord
      )
    )

  }



  return (
    <div>
      <h1>주문내역 리스트</h1>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>주문 id</th>
            <th>상품명</th>
            <th>가격</th>
            <th>주문 수량</th>
            <th>주문일자</th>
            <th>배송 위치</th>
            <th>배송 상태</th>
            <th>배송 완료 처리</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.products.name}</td>
              <td>{order.products.price}</td>
              <td>{order.quantity}</td>
              <td>{currentTime}</td>
              <td>{order.address}</td>
              <td>{order.shippingType === 0 ? "주문 대기" : "배송완료"}</td>
              <td>
                <button onClick={() => handleShippingCompleted(order)}>
                  배송완료
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory