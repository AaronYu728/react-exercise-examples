import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../note";

export default function App() {
  return (
    <div>
      <Header />
      {notes.map((item) => (
        <Note key={item.key} title={item.title} content={item.content} />
      ))}
      <Footer />
    </div>
  );
}
