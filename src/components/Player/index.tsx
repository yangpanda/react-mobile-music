import { usePlayerSelector } from '@/store';

const Player = () => {
  const currentSong = usePlayerSelector((state) => state.currentSong.value);
  return (
    <>
      <audio
        autoPlay
        src={currentSong ? `https://music.163.com/song/media/outer/url?id=${currentSong}` : ''}></audio>
    </>
  );
};

export default Player;
