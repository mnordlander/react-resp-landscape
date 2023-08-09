import "../index.css";
import Player from "./Player";
import Chat from "./Chat";

export default function Page() {
  return (
    <div className="page-wrapper">
      <Player playerWith={"70%"} />
      <Chat />
    </div>
  );
}