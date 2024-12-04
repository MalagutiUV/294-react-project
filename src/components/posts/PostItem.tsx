import MediaLinkItem from "./MediaLinkItem";

export interface IPostItemProps {
  postItem: any;
}

const PostItem: React.FC<IPostItemProps> = (props) => {
  const { postItem } = props;
  return (
    <div className='w-96 min-h-24 bg-blue-200 rounded-xl rounded-br-none p-6 shadow-lg'>
      <p>{postItem.content}</p>
      <p className='text-gray-400'>User: {postItem.user_id}</p>
      <p className='text-gray-400'>Created: {postItem.created_at}</p>
      {postItem.medialinks.map((entry: any) => (
        <MediaLinkItem mediaLinkItem={entry} />
      ))}
    </div>
  );
};

export default PostItem;
