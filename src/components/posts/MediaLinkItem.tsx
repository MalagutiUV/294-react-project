export interface IMediaLinkItemProps {
  mediaLinkItem: any;
}

const MediaLinkItem: React.FC<IMediaLinkItemProps> = (props) => {
  const { mediaLinkItem } = props;
  return <p>Quelle: {mediaLinkItem.source}</p>;
};

export default MediaLinkItem;
