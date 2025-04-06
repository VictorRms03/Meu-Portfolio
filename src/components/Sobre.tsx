import Image from "next/image";

export default function Sobre() {
    return (

        <section className="py-12">

            <div className="max-w-9/12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

                <div>

                    <Image src="/images/Foto2 - Victor Ramos.jpg" alt="Ilustração de dev" width={550} height={550}/>

                </div>

                <div className="w-1/2 justify-start">

                    <h2 className="text-5xl"> Sobre <span className="font-extrabold">Mim!</span> </h2>

                    <p className="mt-12"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc lacus, accumsan eget purus eget,
                         dapibus elementum ipsum. Nulla porttitor lacus ut consectetur sagittis. Sed non pharetra dolor. Aenean
                         iaculis ante ac dui viverra pretium. Aenean fermentum lorem in sapien sollicitudin, vitae volutpat dolor
                         dignissim. Nulla victus volutpat. Nam vel neque vel ipsum egestas tincidunt. Fusce quis condimentum mauris.
                         In faucibus feugiat ligula sed tincidunt. Integer a.
                    </p>

                    <p className="mt-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc lacus, accumsan eget purus eget,
                         dapibus elementum ipsum. Nulla porttitor lacus ut consectetur sagittis. Sed non pharetra dolor. Aenean
                         iaculis ante ac dui viver Etiam cursus nunc velit, eget elementum lectus efficitur ultricies.
                         Maecenas vehicula nulla et luctus volutpat. Nam vel neque vel ipsum egestas tincidunt. Fusce quis condimentum mauris.
                         In faucibus feugiat ligula sed tincidunt. Integer a.
                    </p>

                </div>

            </div>

        </section>

    )
}