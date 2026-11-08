// CONFIGURATION: Replace this with the Gmail address where you want to receive orders.
const RESTAURANT_EMAIL = "faizanshy7@gmail.com";
const PRODUCTS = [{"category": "Burgers", "name": "Classic Zinger Burger", "description": "Crispy chicken, lettuce & signature sauce.", "price": 650, "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80", "tag": "BESTSELLER"}, {"category": "Burgers", "name": "Mighty Zinger Burger", "description": "Double crunch, double cheese, big flavour.", "price": 850, "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=700&q=80", "tag": "DOUBLE UP"}, {"category": "Burgers", "name": "Cheese Zinger Burger", "description": "Crispy fillet loaded with melted cheese.", "price": 750, "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80", "tag": "CHEESY"}, {"category": "Burgers", "name": "Spicy Zinger Burger", "description": "Hot spicy crunch with our fiery sauce.", "price": 700, "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80", "tag": "HOT"}, {"category": "Burgers", "name": "Tower Zinger Burger", "description": "A towering stack of crispy goodness.", "price": 950, "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=700&q=80", "tag": "LOADED"}, {"category": "Rolls", "name": "Classic Zinger Roll", "description": "Crispy zinger strips wrapped with fresh salad.", "price": 380, "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4?auto=format&fit=crop&w=700&q=80", "tag": "FAN FAVOURITE"}, {"category": "Rolls", "name": "Mayo Garlic Zinger Roll", "description": "Creamy garlic mayo and crispy chicken.", "price": 420, "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4?auto=format&fit=crop&w=700&q=80", "tag": "CREAMY"}, {"category": "Rolls", "name": "Cheese Zinger Roll", "description": "Cheese-loaded roll with a crunchy bite.", "price": 450, "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4?auto=format&fit=crop&w=700&q=80", "tag": "CHEESY"}, {"category": "Rolls", "name": "Spicy Zinger Roll", "description": "A spicy kick in every single bite.", "price": 420, "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4?auto=format&fit=crop&w=700&q=80", "tag": "HOT"}, {"category": "Rolls", "name": "Loaded Zinger Roll", "description": "Extra chicken, extra sauce, extra love.", "price": 520, "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4?auto=format&fit=crop&w=700&q=80", "tag": "LOADED"}, {"category": "Tikka", "name": "Chicken Tikka Leg", "description": "Juicy leg piece with smoky tikka masala.", "price": 420, "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80", "tag": "BBQ"}, {"category": "Tikka", "name": "Chicken Tikka Chest", "description": "Tender chest piece, chargrilled to perfection.", "price": 520, "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80", "tag": "BBQ"}, {"category": "Tikka", "name": "Malai Tikka", "description": "Creamy, tender chicken with mild spices.", "price": 550, "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80", "tag": "CREAMY"}, {"category": "Tikka", "name": "Achari Tikka", "description": "Tangy pickle spices with smoky char.", "price": 550, "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80", "tag": "TANGY"}, {"category": "Tikka", "name": "Green Tikka", "description": "Fresh herbs, green chillies and bold flavour.", "price": 540, "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80", "tag": "HERB"}, {"category": "Tikka", "name": "Bihari Tikka", "description": "Traditional spices and melt-in-mouth texture.", "price": 580, "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80", "tag": "SPECIAL"}, {"category": "Tikka", "name": "Tikka Boti", "description": "Boneless smoky bites, grilled fresh.", "price": 600, "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80", "tag": "BONeless"}, {"category": "Broast", "name": "Broast Leg Piece", "description": "A juicy leg piece with a golden, crunchy coating.", "price": 480, "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80", "tag": "LEG PIECE"}, {"category": "Broast", "name": "Broast Chest Piece", "description": "A tender chest piece, crispy outside and juicy inside.", "price": 520, "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80", "tag": "CHEST PIECE"}, {"category": "Broast", "name": "Quarter Broast", "description": "One crispy piece with our house seasoning.", "price": 430, "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80", "tag": "CRISPY"}, {"category": "Broast", "name": "Half Broast", "description": "Two pieces of golden crispy chicken.", "price": 780, "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80", "tag": "POPULAR"}, {"category": "Broast", "name": "Full Broast", "description": "Four-piece feast for serious cravings.", "price": 1450, "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80", "tag": "FEAST"}, {"category": "Broast", "name": "Spicy Broast", "description": "Extra crispy with a spicy kick.", "price": 480, "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80", "tag": "HOT"}, {"category": "Broast", "name": "Family Broast", "description": "A shareable crispy chicken family deal.", "price": 1850, "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80", "tag": "FAMILY"}, {"category": "Breakfast", "name": "Doodh Patti Chai", "description": "Strong, creamy and freshly brewed tea.", "price": 100, "image": "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=700&q=80", "tag": "FRESH"}, {"category": "Breakfast", "name": "Crispy Paratha", "description": "Flaky, golden and served hot.", "price": 120, "image": "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=700&q=80", "tag": "HOT"}, {"category": "Breakfast", "name": "Masala Omelette", "description": "Fluffy eggs with onion, tomato and spice.", "price": 180, "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80", "tag": "CLASSIC"}, {"category": "Breakfast", "name": "Halwa Puri", "description": "Traditional halwa, puri and chana combo.", "price": 350, "image": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80", "tag": "DESI FAVOURITE"}];

let cart = [];
let activeCategory = "All";
const $ = (id) => document.getElementById(id);
const money = (n) => "Rs. " + Number(n).toLocaleString("en-PK");

function renderProducts() {
  const q = $("searchInput").value.trim().toLowerCase();
  const filtered = PRODUCTS.map((p,i)=>({...p,id:i})).filter(p =>
    (activeCategory==="All" || p.category===activeCategory) &&
    (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
  );
  $("productGrid").innerHTML = filtered.length ? filtered.map(p => `
    <article class="product-card">
      <div class="product-photo"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="food-tag">${p.tag}</span></div>
      <div class="product-info"><div class="product-top"><div><h3>${p.name}</h3><p>${p.description}</p></div><span class="price">${money(p.price)}</span></div>
      <button class="add-btn" data-add="${p.id}">ADD TO CART +</button></div>
    </article>`).join("") : `<div class="no-results">No items found. Try another search.</div>`;
}
function addToCart(id) {
  const found=cart.find(x=>x.id===id);
  if(found) found.qty++; else cart.push({id,qty:1});
  updateCart();
}
function changeQty(id,delta) {
  const item=cart.find(x=>x.id===id); if(!item)return;
  item.qty+=delta; if(item.qty<=0)cart=cart.filter(x=>x.id!==id);
  updateCart();
}
function total(){return cart.reduce((s,x)=>s+PRODUCTS[x.id].price*x.qty,0)}
function updateCart(){
  const count=cart.reduce((s,x)=>s+x.qty,0);
  $("cartCount").textContent=count; $("drawerCount").textContent=`(${count})`;
  $("cartSubtotal").textContent=money(total());
  $("cartItems").innerHTML=cart.length?cart.map(x=>{const p=PRODUCTS[x.id];return `
    <div class="cart-row"><img src="${p.image}" alt=""><div><h4>${p.name}</h4><small>${money(p.price)} each</small><div class="qty"><button data-qty="${x.id}" data-delta="-1">−</button><b>${x.qty}</b><button data-qty="${x.id}" data-delta="1">+</button></div></div><span class="line-price">${money(p.price*x.qty)}</span></div>`}).join(""):`<div class="empty-cart">Your cart is looking hungry.<br><b>Let's fix that.</b></div>`;
}
function openCart(){ $("cartDrawer").classList.add("open"); $("overlay").classList.add("show"); }
function closeCart(){ $("cartDrawer").classList.remove("open"); $("overlay").classList.remove("show"); }
function checkout(){
  if(!cart.length){openCart();return;}
  closeCart();
  $("orderSummary").textContent=cart.map(x=>`${PRODUCTS[x.id].name} × ${x.qty} — ${money(PRODUCTS[x.id].price*x.qty)}`).join("\n");
  $("checkoutTotal").textContent=money(total());
  $("formStatus").textContent=""; $("formStatus").className="form-status";
  $("checkoutModal").classList.add("show");
}
$("productGrid").addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b){addToCart(Number(b.dataset.add));b.textContent="ADDED ✓";setTimeout(()=>b.textContent="ADD TO CART +",900)}});
$("cartItems").addEventListener("click",e=>{const b=e.target.closest("[data-qty]");if(b)changeQty(Number(b.dataset.qty),Number(b.dataset.delta))});
$("categoryTabs").addEventListener("click",e=>{const b=e.target.closest("button[data-category]");if(!b)return;activeCategory=b.dataset.category;document.querySelectorAll(".category-tabs button").forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
$("searchInput").addEventListener("input",renderProducts);
$("cartOpen").addEventListener("click",openCart); $("cartClose").addEventListener("click",closeCart); $("overlay").addEventListener("click",closeCart);
$("checkoutBtn").addEventListener("click",checkout); $("modalClose").addEventListener("click",()=>$("checkoutModal").classList.remove("show"));
$("mobileMenu").addEventListener("click",()=>{document.querySelector(".desktop-nav").style.display=document.querySelector(".desktop-nav").style.display==="flex"?"none":"flex";document.querySelector(".desktop-nav").style.cssText+=";position:absolute;top:70px;left:0;right:0;background:#0b0b0b;padding:22px;flex-direction:column;gap:20px"});
$("year").textContent=new Date().getFullYear();

$("orderForm").addEventListener("submit",async e=>{
  e.preventDefault();
  const status=$("formStatus"), submit=$("submitOrder");
  if(!cart.length){status.textContent="Your cart is empty.";status.className="form-status error";return;}
  if(RESTAURANT_EMAIL==="YOUR_GMAIL@gmail.com" || !RESTAURANT_EMAIL.includes("@")){
    status.textContent="Please add your restaurant Gmail in script.js first (RESTAURANT_EMAIL).";status.className="form-status error";return;
  }
  const fd=new FormData(e.target);
  const orderLines=cart.map(x=>`${PRODUCTS[x.id].name} x ${x.qty} = ${money(PRODUCTS[x.id].price*x.qty)}`).join("\n");
  const payload={
    _subject:`New Mr Foodie Order — ${fd.get("customer_name")}`,
    _template:"table",
    _captcha:"false",
    "Customer name":fd.get("customer_name"),
    "Phone":fd.get("phone"),
    "Address":fd.get("address"),
    "Order type":fd.get("order_type"),
    "Payment method":fd.get("payment_method"),
    "Items":orderLines,
    "Total":money(total()),
    "Extra instructions":fd.get("instructions")||"None"
  };
  submit.disabled=true;submit.textContent="SENDING ORDER...";
  try{
    const response=await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(RESTAURANT_EMAIL)}`,{
      method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(payload)
    });
    const result=await response.json();
    if(!response.ok || result.success===false)throw new Error(result.message||"Email service could not accept the order.");
    status.textContent="Order submitted! Check your Gmail inbox and spam folder for the order. The first submission may require email activation from FormSubmit.";
    status.className="form-status success";
    cart=[];updateCart();e.target.reset();
    submit.textContent="ORDER SUBMITTED ✓";
  }catch(err){
    status.textContent="Order could not be sent right now. Please try again. "+err.message;
    status.className="form-status error";submit.disabled=false;submit.textContent="PLACE ORDER ↗";
  }
});
renderProducts();updateCart();
