const VideoSection = () => {
  return (
    <div className="video-container" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
      {/* Replicating the structure from saved_resource.html */}
      <iframe 
        className="youtubeembed"
        src="https://www.youtube.com/embed/EUae_dU_FGE?si=YIrg9G2kVnJLe5PP&autoplay=1" 
        title="ShubhUrja Intro"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default VideoSection;