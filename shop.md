        <div class="w-[75%] flex flex-col gap-5 h-screen">
            <div class="flex items-start gap-5">
                <% Products.forEach(function(product){ %>
                    <div class="w-60">
                        <div class="w-full h-52 flex items-center justify-center bg-[<%= product.bgcolor %>]">
                            <img class="h-[12rem]" src="data:image/jpeg;base64,<%= product.image.toString('base64') %>"
                                alt="">
                        </div>
                        <div
                            class="flex justify-between bg-[<%= product.panelcolor %>] items-center px-4 py-4 text-[<%= product.textcolor %>]">
                            <div>
                                <h3>
                                    <%= product.name %>
                                </h3>
                                <h4>₹ <%= product.price %>
                                </h4>
                            </div>
                            <a class="w-7 h-7 flex items-center justify-center rounded-full bg-white" href="">
                                <i class="ri-add-line"></i>
                            </a>
                        </div>
                    </div>
                    <% }) %>
            </div>
        </div>
    </div>