'use client';

import { useState } from "react";
import AiBackground from "../components/aiadvice/AiBackground";
import AiNavbar from "./AiNavbar";
import { IoMdSend } from "react-icons/io";

const AiAdvice = () => {
    const [messages, setMessages] = useState([]);
    const [rows, setRows] = useState(1);
    const [text, setText] = useState('');
    const [isFirstMsg, setIsFirstMsg] = useState(true);

    const handlePromptChange = (e) => {
        setText(e.target.value);

        const lines = e.target.value.split('\n').length;
        setRows(Math.max(lines,1));
    }

    const handleFirstPrompt = async (prompt) => {
        let firstPrompt = "[Don't use text-formatting such as * or **]\n Please provide me a short medical advice on following : \n";
        firstPrompt += " " + prompt;

        setMessages(prev => [...prev, {text: prompt, isSenderAi: false}]);

        let res = await fetch('/api/ai', {
            method: 'POST',
            body: JSON.stringify({prompt: firstPrompt}),
        });

        res = await res.json();
        if(!res.ok){
            alert(res.message);
            return;
        }

        setMessages(prev => [...prev, {text: res.aiResponse, isSenderAi: true}]);
    }

    const handleQuery = async (e) => {
        e.preventDefault();
        if(isFirstMsg){
            setIsFirstMsg(false);
            handleFirstPrompt(text);
            return;
        }

        setMessages(prev => [...prev, {text, isSenderAi: false}]);
        setText('');

        let res = await fetch('/api/ai', {
            method: 'POST',
            body: JSON.stringify({prompt:text}),
        });

        res = await res.json();
        if(!res.ok){
            alert(res.message);
            return;
        }

        setMessages(prev => [...prev, {text: res.aiResponse, isSenderAi: true}]);
    }

    return (
        <div className="w-screen min-h-screen  relative bg-black text-white">
            <AiBackground />
            <main className="w-screen h-screen z-0 relative flex flex-col justify-between items-center z-1">
                <AiNavbar />
                <chat className="w-full md:w-1/2 overflow-y-scroll flex flex-col gap-2 py-3 my-2 px-2 md:px-0
                    scroll-hidden h-full
                ">
                    <div className="ai-message self-start cursor-pointer">
                        Hello there! I'm HealthAI, here to assist you on your health journey. 
                        To get started, please let me know what brings you here today: <br/>
                        <span onClick={() => handleFirstPrompt('Weight Management')}>1. Weight Management </span><br/>
                        <span onClick={() => handleFirstPrompt('Fitness & Excercise')}>2. Fitness & Excercice </span><br/>
                        <span onClick={() => handleFirstPrompt('Nutrition & Diet')}>3. Nutrition & Diet</span><br/>
                        <span onClick={() => handleFirstPrompt('Diagnose by Symptoms')}>7. Diagnose by Symptoms</span><br/>
                        <span onClick={() => handleFirstPrompt('Mental health & Well being')}>4. Mental health & Well Being</span><br/>
                        <span onClick={() => handleFirstPrompt('Chronic condition management')}>5. Chronic Condition Management</span><br/>
                        <span onClick={() => handleFirstPrompt('General Health & Wellness')}>6. General Health & Wellness</span>
                    </div>
                    {messages.map((msg) => {
                        if(msg.isSenderAi){
                            return <div className="ai-message self-start">{msg.text}</div>
                        }else{
                            return <div className="ai-message self-end sender-me">{msg.text}</div>
                        }
                    })}
                </chat>
                <div className="w-full md:w-1/2 px-1 py-1 flex items-start">
                <prompt className="w-full flex py-3 px-4 rounded md:rounded-lg ai-input-bg items-end">
                    <textarea 
                        className="w-full bg-transparent outline-none ai-input"
                        placeholder="Type your queries here"
                        rows={rows}
                        value={text}
                        onChange={handlePromptChange}
                    />
                    <button className="text-2xl hover:scale-90" onClick={handleQuery}>
                        <IoMdSend />
                    </button>
                </prompt>
                </div>
            </main>
        </div>
    )
}

export default AiAdvice;