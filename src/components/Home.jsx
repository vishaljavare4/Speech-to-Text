import SpeechRecognition, {
    useSpeechRecognition,
  } from "react-speech-recognition";
  const Home = () => {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition,
    } = useSpeechRecognition();
  
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
      <>
        <div className="flex flex-col gap-2 items-center">
          <p className="font-serif text-[50px] text-gray-600">
            Speech to Text Converter
          </p>
          <p className="font-serif text-2xl text-gray-500">
            A powerful tool to convert your voice into text
          </p>
          <div className="h-[400px] w-[50%] p-4 text-xl text-justify shadow-2xl rounded-lg mb-10" >
            {transcript}
          </div>
          <div className="flex flex-col gap-4 shadow-xl p-2">
            <p>Microphone: {listening ? "on" : "off"}</p>
            <div className="flex gap-10">
              <button className="p-4 bg-green-600 rounded-lg text-white" onClick={SpeechRecognition.startListening}>
                Start
              </button>
              <button className="p-4 bg-rose-600 rounded-lg text-white" onClick={SpeechRecognition.stopListening}>
                Stop
              </button>
              <button className="p-4 bg-blue-600 rounded-lg text-white" onClick={resetTranscript}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default Home;