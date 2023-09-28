import NewForm from '@/app/new/page';

function EditPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <NewForm params={params} />
    </div>
  );
}

export default EditPage;
