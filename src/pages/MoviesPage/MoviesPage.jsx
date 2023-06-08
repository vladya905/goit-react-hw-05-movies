import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MoviesForm from 'components/MoviesForm';
import MoviesSearchList from 'components/MoviesSearchList';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const navigate = useNavigate();

  useEffect(() => {
    if (search === '') {
      setSearchParams({ search: undefined }); 
      navigate('/movies'); 
    }
  }, [search, setSearchParams, navigate]);

  return (
    <div>
      <MoviesForm forSearch={search => setSearchParams({ search })} search={search} />
      <MoviesSearchList search={search} />
    </div>
  );
}



