        // Modal
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("cart");
        var close = document.getElementsByClassName("close")[0];
        var close_footer = document.getElementsByClassName("close-footer")[0];
        var order = document.getElementsByClassName("order")[0];
        var themvao = document.getElementsByClassName("themvao")[0];
        var hethang = document.getElementsByClassName("hethang")[0];


        btn.onclick = function () {
          modal.style.display = "block";
        }
        close.onclick = function () {
          modal.style.display = "none";
        }
        close_footer.onclick = function () {
          modal.style.display = "none";
        }
        themvao.onclick = function(){
          alert("Sản phẩm đã được thêm vào giỏ hàng")
        }
        hethang.onclick = function(){
          alert("Sản phẩm đã bán hết")
        }
        order.onclick = function () {
          alert("Cảm ơn bạn đã thanh toán đơn hàng")
        }
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
        // xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
}
// Lấy các phần tử DOM cần sử dụng
var quantityInput = document.getElementById("quantityInput");
var totalPriceElement = document.getElementById("totalPrice");

// Gán hàm xử lý sự kiện change cho input số lượng
quantityInput.addEventListener("change", function() {
  // Lấy giá trị số lượng từ input
  var quantity = parseInt(quantityInput.value);

  // Tính tổng tiền
  var totalPrice = quantity * 25; // Giả sử mỗi lượt tăng là 10 đơn vị tiền

  // Cập nhật nội dung hiển thị trên giao diện
  totalPriceElement.textContent =  totalPrice + ".000"+".000đ";
});
// update cart 
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i]
    var price_item = cart_row.getElementsByClassName("cart-price ")[0]
    var quantity_item = cart_row.getElementsByClassName("quantityInput")[0]
    var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value // lấy giá trị trong thẻ input
    total = total + (price * quantity)
  }
}