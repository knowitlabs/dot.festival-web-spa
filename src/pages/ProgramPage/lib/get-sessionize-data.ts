export const getSessionizeData = async () => {
  const response = await fetch(
    'https://sessionize.com/api/v2/2cycckpp/view/GridSmart'
  );
  const json = await response.json();
  const responseSpeakers = await fetch(
    'https://sessionize.com/api/v2/2cycckpp/view/Speakers'
  );
  const speakersJson = await responseSpeakers.json();

  return {
    schedule: json,
    speakers: speakersJson
  };
};
