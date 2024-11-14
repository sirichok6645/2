function checkAnswers() {
    // คำตอบที่ถูกต้อง
    const correctAnswers = {
        q1: "JavaScript เป็นภาษาที่ใช้ในการพัฒนา Front-End เพื่อสร้างความโต้ตอบบนเว็บไซต์ เช่น การทำให้หน้าเว็บมีการตอบสนองเมื่อผู้ใช้คลิก หรือป้อนข้อมูล",
        q2: "let และ const ใช้สำหรับการประกาศตัวแปรที่มีการบล็อกสโคป (block-scoped) ต่างจาก var ที่ใช้สำหรับตัวแปรที่มีการทำงานในฟังก์ชันสโคป (function-scoped)",
        q3: "ประเภทข้อมูลใน JavaScript มีหลายประเภท เช่น String, Number, Boolean, Object, Array, Null, Undefined, Symbol, BigInt",
        q4: "console.log() ใช้สำหรับการพิมพ์ข้อความหรือค่าต่าง ๆ ลงในคอนโซล เพื่อช่วยในการดีบักและตรวจสอบข้อมูลขณะเขียนโปรแกรม"
    };

    // ดึงค่าจากฟอร์ม
    const answers = {
        q1: document.getElementById("q1").value.trim(),
        q2: document.getElementById("q2").value.trim(),
        q3: document.getElementById("q3").value.trim(),
        q4: document.getElementById("q4").value.trim(),
    };

    // ตรวจสอบคำตอบ
    let score = 0;
    for (let question in answers) {
        if (answers[question].toLowerCase() === correctAnswers[question].toLowerCase()) {
            score++;
        }
    }

    // แสดงผลลัพธ์
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `คุณได้คะแนน ${score} จาก 4 คะแนน`;

    // เปลี่ยนสีผลลัพธ์ตามคะแนน
    if (score === 4) {
        resultDiv.className = 'result green';
    } else if (score >= 2) {
        resultDiv.className = 'result yellow';
    } else {
        resultDiv.className = 'result red';
    }
}
