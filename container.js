const container =  document.querySelector(".container");
container.innerHTML = `
<form class="container-form"> 
<i class="fas fa-search"></i>
<input type="text"  placeholder="Search products" id="search-items" onkeyup="searchFun()">
</form>
            
<div class="product-list" id="product-list">
           <!-- products --> 

<div class="product" id="product">
    <img src="https://rukminim1.flixcart.com/image/832/832/kyxb9u80/t-shirt/k/n/y/xl-t67-nbwh-eyebogler-original-imagbfyc3rkzaj2y.jpeg?q=70" >
    <div class="p-details">
        <h2>Tshirt For Everyone</h2>
        <h3>₹150</h3>
    </div>
</div>
<!-- products --> 
<div class="product">
    <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/whatsapp_image_2022-09-21_at_11-sixteen_nine.jpeg?size=948:533 https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/whatsapp_image_2022-09-21_at_11-sixteen_nine.jpeg?size=948:533" >
    <div class="p-details">
        <h2>Smart Watch</h2>
        <h3>₹150</h3>
    </div>
</div>
        <!-- products -->
<div class="product">
    <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/backpack/0/i/e/7-laptop-backpack-spacy-unisex-backpack-fits-upto-16-inches-original-imaghfr8htnbzumw.jpeg?q=70" >
    <div class="p-details">
        <h2>Puma LRT Bag</h2>
        <h3>₹150</h3>
    </div>
</div>
            <!-- products -->
<div class="product">
    <img src="https://rukminim1.flixcart.com/image/612/612/kfmv9u80/sweatshirt/b/z/p/m-716y-breil-by-fort-collins-original-imafwfrehug3gfqy.jpeg?q=70" >
    <div class="p-details">
        <h2>Hoodie for Men</h2>
        <h3>₹150</h3>
    </div>
</div>
                <!-- products -->
<div class="product">
    <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/d/j/f/xl-4790-funday-fashion-original-imagjvqekryrkrbc.jpeg?q=70" >
    <div class="p-details">
        <h2>Hoodie For Women</h2>
        <h3>₹150</h3>
    </div>
</div>
            <!-- products -->
<div class="product">
    <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/n/4/z/-original-imagg7esampp7hr4.jpeg?q=70" >
    <div class="p-details">
        <h2>Grand Court Sneaker</h2>
        <h3>₹150</h3>
    </div>
</div>
                <!-- products -->
<div class="product">
    <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/abcd7fda-43ed-4071-b78b-81ff5914b41a._CR0,0,1200,628_SX810_QL70_.jpg" >
    <div class="p-details">
        <h2>Sunglass</h2>
        <h3>₹150</h3>
    </div>
</div>
                <!-- products -->
<div class="product">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2247NkialOzGtDxhG4_7wu77l9Wno9FwWQ&usqp=CAU" >
    <div class="p-details">
        <h2>Iphone</h2>
        <h3>₹150</h3>
    </div>
</div>
        <!-- products -->
<div class="product">
    <img src="https://rukminim1.flixcart.com/image/612/612/kiw1dow0-0/shirt/5/x/u/xl-black-purvi-original-imafyhy8jmhwrhp7.jpeg?q=70" >
    <div class="p-details">
        <h2>Black Shirts</h2>
        <h3>₹150</h3>
    </div>
</div>

        <!-- products -->

<div class="product">
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEhUREhEVEA8QEBAQFxASEBAWEhURFhEWFhgTExUYHCkhGB0qGxUWITEhJikrLi4uGh8zRDMsQystLi0BCgoKDg0OGRAQFS8iICUtLy4yKys1LS03Ny8zLS4wNzc3LC0tKy0tMjctLS0rNzU3LS0tLjIyLTU3NTU3Li0tK//AABEIALEBHAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABIEAABAwIEAwQGBQkECwEAAAABAAIDBBEFEiExE0FRBgcUYSIyUpGT0RdUcYGhFSMkM0JDU2KScnOxwjVEVWR0goOywdPwFv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACkRAQACAgAFAgYDAQAAAAAAAAABAgMREiExUWEEQRNxkcHh8COh0SL/2gAMAwEAAhEDEQA/AJxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARWK2rjhY6WV7Y4mC7pHuAa0dSTsqJcQhZF4h0rG0+QScYvaI8hFw7NtaxGqDKRUQTNe1r2ODmPaHNcDcFpFwQeYsq0BFpWdrcPMvBFbT8bPw+Fx48/EvbJlvfNfS3VbpARFjYfiEVQ0vieHsD5Iy4Aj02PLHN16OBCDJRanE+01DSv4dRVwQSZQ7JLMxjspvY2J20K2cMrXtD2uD2OAcHNILS0i4II3CCtERAREQEREBERAREQEREBERAREQEREBERAREQEREBERByvep/omt/wCHd/3BcNjTHup5sCIcYqFlVVuec1nYdFFxaRmbmeK9jN9oHKXqqmZKwxyMbJG8Wcx7Q5jh0c06EJJTsdcOY1we3I67QczNfRdfcanTzKCFsZxyRlK+SCpqYpaCiw9ovWwQwMldSxPDY6cAmozZhfiDckN2XQUOIGd9TUVOJy0VTT4j4eOma88FsIcwRsdS/vuIHXzb+lpbKu+lwKkeczqWBzuHwczoIieDa3DuR6ttMuyrkwmmdK2d1PE6dgAbMYYzK0Dk19rj7ighqskIw6q4k1KaVmJ1UjqUgsrXhleXZI5s5DXG2lo78rjdbLE8cn4NZXeNmixCmxAwQYfxCIzGJmMjhfSfvC9jic2+twQApOjwCja/itpIGy5i/iiniD8xNy7Nlve/NXpMJp3SiodTxOqGiwnMUZlA6CQjMPegi6oxmbhPrfHStxJmLCkbh3HbwSzxgiFL4fZxMRL89s3O6q7F18pqo6aZz6ai8ZikkDo32bV1TayS8UzwbtDWkkR7PIJJNspk84TTmbxHh4vEgZePwo+Na1rcS2a33ocLp8oZwIsjZeOG8JmUTZi7igWsH5iTm3uSUHEYhJUjGKkU9LFVl2HUYc2afhNaOLPr+rdmvrcaLTYLglXSS+BNXMfBYQ2r8PTSuZFJUmrqHiMXGbJqGWFi4NbfTRSu2mjDzKGNErmtYZA1ucsaSQ0u3IBJsPMoKaMPMuRvFLBGZMrc5YCSGF29rkm3mUEYdmsUeHYXNHiEtZPiN/FU752yRgeHc+RzIhpDw5AG+iB0N1Kiw6XCaeKR8sdPFHNL68rIo2yP1v6bgLu+9ZiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICKxPWxR+vIxg/me0f4laWu7c4ZB+srYWnoJAT+CDoUXAVffBhLDZskkx2Aihc65+1XnduKyQfmMHqnA7OmfDCD52e4FDTuUXKYF2omdKKeupxSSyguiLZA+N4G7cw0zC408x5X6tAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFDHeF3pYlh9XJSilija05o5HZ3cSI+rINh9o5EEKZ1zHb/sbDi1Pwn2ZNHd0M9tY3kbHq02AI+w7gFTHkQPP3tYvKbOqRE2+vBijabeRIK1+MdosQdaV9bUVFI42zCVzHNJ/ZeG2sfwPvA0WMYTNRzPp52GOaJ2VzTt5OaebSNQeYXuG1zojpZzXDK5jhdrmndrhzCtenLdXXipjtHDbl5/fZeraYyjiCV8jD7T3O187m61RGU2IW7kpeGDUUt3Q7yU5N3Rjr/M3o7cc+px54mTNzs+8c2noVWl+zHJjvitqzAZKpS7tu8cwWpqtxdTjRkpuXRDo7mWfiPs2iV4LTZXIpiCCDYjW/mtdxeFoybjhl9ZYrh0dZDkJ0OWSOZhGZj7XbLG77/sIJGoJVfZbG3vc6kqbCsgA1HqzR65ZmX5Gx9x6FRj3a9o3x04cwGami0npm3dLT8/EUzd3R83Rbj1m75VIOKULKyOOenkaJoxxaepYbt1scpI3Y6wuPIHcBYxMc4YzExOpdki0nZfHhVsLXt4dVCeHNCfWa8cx1B0IOxBB2IJ3aIERYddV5fRHrH8B80GU6QDcgfeFTx29Vp2lXWlBsuO3/wCCccdFhAqsFShk8byTilWQV7dBdzlUSTZRc3+wbk9AqXOAFzoBrde00Zcc7hb2W9B7R8z+CC5SscAS46uN8vJosBlHu991eRFCRERAREQEREBERAREQEREBERBw/ef2CZisOeMBldC08OQ6B7d+DIfZJ2P7J+0g/NVTSPie6ORpjkjcWOY4Wc1wNiCF9mqNe9nu98c01dM39Njb6TB+/jA2/tgbHmNOlrVtpthvETqeiAaCqfE4PYS1w5hZ8tAJrzUgyTgEvpR6rxzMI/ye7oteY7aEWI0sdwfNXYJCwgg2IN7hRkpvnXq9euOt6cGTp7T2+X7zYcpbKLt0cN29PMeS1xFlJtH2GqMWh8XE1kEwdl4r3FrJ7GznEAGzh7Wx1HUrk+1HZOtodamAsaTYSts6F32PboD5GxVKzuOmnj58XwrzTcT5hX2Kx59HI6RpIy5XG3TMGn8XNP/ACqXsExgtHiaJvFjec8+HNIGYnV09GNmyczHs/lY7wTg4BlyuJDHMka629uG7b3LoIKmpwmYAuzRON2Stvle2+46HqOXuKwy47cfxMc/9dvafz5dWG+O+OMWXl11bt+E7zPFQGYlh7g+djcpaNONGD6VPKDbK8XNg61jcaXuOtwHGI6yETRnfRzDo5jxoWOB1BBvuolwbFjUO8XRPbFWm3FgebU9YAPVk9iXpIPsOi3dFjgEklbSsc2WMhtfhzxaZmn64N5kb3HrAXGoLXaYstckcuUx1js5s+C+G3Df6+0x4SJiNaIhYavOw6eZWla8k3JuTzWDDWiYCUOzh/pZhtbyWSxy2YMthV5pWrr8Shpo3TTSNiiYLl7joPIcyegGpWu7O9qosQefC5nU8Yu+Z0MjQX3sIml1gDazjvoeSDqmlXAVjtKutKC8Cqrq2CvGM4ht+wPWPU+yP/PuQVwM4hzH9WDoPaPtfZ0WcvAF6oSIiICIiAiIgIiICIiAiIgIiICIiAiIgiHvd7v8+bEKVnp6unhaPWHOZgH7XtDnvve8NZV9hqFO8nu84MwqqZn6NNKwSxNH6l73AZmgfuyTt+yfI+i3p6fovUxH8d5+UpB7OUQp6WCH+HBE0/2soLj97iSs6aJr2lj2h7HAtcxwBa4HkQdCFXa2nREebM7naJO1/dSyN5q6GzGtzukpXHQNym7oXH35T9x2C4XC8WZLHwZ2iSJwF2ncG3rNPI+a+kKtmaN46sePe0hfI0EhFkivFMrRzr++G+lgmw54mhcZKYkWeNx/LIOR89j+AkDBMchxHJJxTS4hC3LFWMALwP4czdpY/wCU7clwGFYyW+i6zmOGVzHC7SOhCprMMMP6TRkmMauiuS9nmPab+I59Vhlw8U8VZ1aPf7T3h14fUxw/CzRun9x5hJ1FjT6KcRVLG0/GNzG03gLybcajefWicd2H0mE22Iy93E8EAg3B1uOiiPs92rp66HwdcwSxHa5s5jrWzxO3a7z+7ULssEkfQ5YZZePSSOywVR9YG1xFOOT7A67OtfqAxZ+KeC8at27/AC7svUelti1as8VZ6Wj79pant32SxDFapjc7IaCKwaS/Mb5QXSmMbm5LQCdm8r6yFgWGx0kEdNEPzcLAwaAEnm51ha5NyfMlVMKvsK6HKymlXWlYzCrgJJDW6vdt0A5uPkgvtBecjdObneyPmVs44w0BoFgNLKimgEbco15kncnmSrqhIiIgIiICIiAiIgIiICIiAiIgIsU4lADbjR3BsRxGXB6HVeflOD+PH8VnzQZaLEGJwHQTxE9OKz5ql2MUwNjUQgnkZo7/AOKDNRYP5YpvrEPxo/mvDjVL9Zh+NH80GeqZYw4FrgHNcC0tIBBBFiCDuFrXdo6Ib1cA/wCvH81Ucfo75fFQ5h+zxmX910GvMbqd4icS6J5tFI4knrwXk7uAHouPrAWOou7JV2qxCjlYY3zROY4WI4rR5ggg3BBsQRqCAVwHaTtjV0MgijpWYhFlu2piqNXC+0rGRnI8aX5HcW1aA7oi6+P5BZxHRxHuKm0952If7IPxJf8A1qJ6nAat73P8PI3O9zrCJ5tck2vbzV6Tqea0W1DVsdZbTDsSdGQQdlR/+eq/4EvwZPkvfyDVD9xL8GRXtNbLcUT1Z9Xh7Kn87TkR1G5jFgx56t9l34HyWx7O9rS0OpaoExu9BzXXBFjoerXAgEHcEArSQ4bWMNxDLf8AuJVXidPUzgcSmcHtsBKIJg+3suOx+9cuXDXJGrfXs1wepthmdc4nrE9JTJ2Sx8Eimlfmda8Upt+djHI/zDQEfMLsGFfNdLJWQtADJLNcHNJglu1w5tI26KZ+xXaxtXATL+bmhsHh2l9L5rHy3+481anFEatz8s83w+LePp2n2/12We1gBmcTYNG5PRbrD6Thi51kdq53+UeQWvwjhM9OSRgmI9TiMuxp1y77nQkrbCpZ7bf6grMl1Fb47Pab/UF7xm+0PeEFaKjit9oe8L3iDqPeEFSKnOOo94TiDqPeEFSKjit9oe8KoFB6iIgIiICIiAiIg4ao7uI3SySsqpGCWR8mThxOsXOLiASNrkrGPd3Pc2rhlvpembe1+fpbqQkU7HEju/P1yT4US8+j7n4x9+vBiXbomxxH0ff77J8KJUnu8v8A67J8KNdyibEeT91rH71kl/7tixPoxqQ9zxXtJJ0Jpze3K/p2vZScibHCju+f9fk+DD8l79Hz/r8vwYPku5RNjhvo+f8AX5fgwfJPo+f9fl+DB8l3KJscN9Hz/r8vwYPkqZu7gSNySVbpWkg5X08Dm6baEWXdoo2I9g7q4I3BzJQx4vZzKSma4X6EC4WLWd1ZeHsFSzhSODy00zQS7T0n5SLm43UmIgjqm7qo44xG2qc0AbNhYG3Optc33WTB3aRsYGNqX6XNzHEdSb326rvEQcSzsVUF+d9aSSRcsiymwFtPSI2CzYuxwacwqZA43u7JFc36my6lEHKRdiY2hjWy2bE8yMaIKcBjybl7AG+i6+twsqLsy5gysqpGAuc+zWRAZnOLnOtbcuJJ8yV0KINAMAm+uy/0RfJVjA5vrsn9EXyW8RBpPyLN9ck/oj+SsSYJVXNqzTlmiF/vsV0SINH+QpLa1LyeuRi3MMeVobe+UAXO58yq0QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z" >
    <div class="p-details">
        <h2>Laptops</h2>
        <h3>₹150</h3>
    </div>
</div>


 <!-- products -->

 <div class="product">
    <img src="https://rukminim1.flixcart.com/image/612/612/kc29n680/trunk/r/7/z/80-cm-ru-tuk-athtrunk-rupa-original-imaft9y6hhxbvmf5.jpeg?q=70" >
    <div class="p-details">
        <h2>Rupa Underwear</h2>
        <h3>₹350</h3>
    </div>
</div>


<div class="product">
    <img src="https://rukminim1.flixcart.com/image/400/400/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70" >
    <div class="p-details">
        <h2>Wall Doctor Items</h2>
        <h3>₹150</h3>
    </div>
</div>

<div class="product">
    <img src="https://rukminim1.flixcart.com/image/400/400/k3j1z0w0/ceiling-lamp/w/7/r/gold-01-classical-original-imafmbywhhurgf6b.jpeg?q=70" >
    <div class="p-details">
        <h2>Decor Lightings</h2>
        <h3>₹150</h3>
    </div>
</div>

<div class="product">
    <img src="https://rukminim1.flixcart.com/image/400/400/kz8qsnk0/mosquito-net/h/1/p/double-bed-polyester-adults-blue-mosquito-net-double-bed-nets-original-imagbagfgnfvnquj.jpeg?q=70" >
    <div class="p-details">
        <h2>Mosquito Nets</h2>
        <h3>₹150</h3>
    </div>
</div>

<div class="product">
    <img src="https://rukminim1.flixcart.com/image/400/400/j5bceq80/diya/s/t/g/etl2042-etrendz-original-imaecayyx9nedubp.jpeg?q=70" >
    <div class="p-details">
        <h2>Diyas, Candles & Holder</h2>
        <h3>₹150</h3>
    </div>
</div>

</div>
`;