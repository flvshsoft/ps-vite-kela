export default function QnASection(){
    
    return (
        <div>
            <h1>Apa kata warga internet ?</h1>
            <center><h2> dengan etthel</h2></center>
            <Tanya1/>
            <Tanya2/>
            <SaranMainanEthel/>
            <TanyaJawabEthel/>

        </div>
    )
}

function Tanya1() {
    return (
        <article>
            <h2>Apa nama lengkap kucing ini?</h2>
            <p><strong>Jawaban:</strong> Ethel the Cat</p>
        </article>
    );
}

function Tanya2() {
    return (
        <article>
            <h2>Di mana Ethel suka tidur?</h2>
            <p><strong>Jawaban:</strong> Bawah meja</p>
        </article>
    );
}

function SaranMainanEthel() {
    return (
        <article>
            <h2>Mainan Favorit Ethel</h2>
            <ul>
                <li>Bola kecil yang bisa dipantulkan</li>
                <li>Laser pointer untuk berlari mengejar cahaya</li>
                <li>Perangkap tikus mainan</li>
            </ul>
        </article>
    );
}

function TanyaJawabEthel() {
    return (
        <article>
            <h2>Tanya Jawab Seputar Ethel</h2>
            <p><strong>Q:</strong> Apa makanan favorit Ethel?</p>
            <p><strong>A:</strong> Ethel sangat menyukai ikan tuna dan makanan kucing kering.</p>

            <p><strong>Q:</strong> Di mana Ethel suka tidur?</p>
            <p><strong>A:</strong> Ethel suka tidur di sofa empuk atau di bawah meja di ruang tamu.</p>

            <p><strong>Q:</strong> Apa suara khas Ethel?</p>
            <p><strong>A:</strong> Suara khas Ethel adalah "uiiaiuiiai" saat dia bermain atau berlarian.</p>
        </article>
    );
}