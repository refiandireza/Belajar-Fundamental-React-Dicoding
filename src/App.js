import React, { useEffect, useMemo, useState } from 'react';
import {
  Route, Routes, useNavigate, useSearchParams,
} from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { BsFillHeartFill } from 'react-icons/bs';
import { MdOutlineLogout } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import SwitchButton from './components/SwitchButton';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import LanguageBtn from './components/LanguageBtn';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import NotFoundPage from './pages/NotFoundPage';
import DetailPage from './pages/DetailPage';
import AddNotePage from './pages/AddNotePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import {
  addNote, deleteNote, archiveNote, unarchiveNote, getUserLogged, putAccessToken,
} from './utils/network-data';
import { DataProvider } from './context/DataContext';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordParams = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(keywordParams || '');
  const navigate = useNavigate();
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleLocale = () => {
    localStorage.setItem('locale', (locale === 'id' ? 'en' : 'id'));
    setLocale((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const toggleTheme = () => {
    localStorage.setItem('theme', (theme === 'light' ? 'dark' : 'light'));
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const localeContextValue = useMemo(() => ({
    locale,
    toggleLocale,
    theme,
    toggleTheme,
  }), [locale, theme]);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const deleteHandler = async (id, archived) => {
    await deleteNote(id);

    if (archived) {
      navigate('/archives');
    } else {
      navigate('/');
    }
    locale === 'id' ? toast.success('Catatan Berhasil Dihapus') : toast.success('Note Has Been Deleted');
  };

  const archiveHandler = async (id) => {
    await archiveNote(id);
    navigate('/archives');
    locale === 'id' ? toast.success('Catatan Berhasil Diarsip') : toast.success('Note Has Been Archived');
  };

  const unarchiveHandler = async (id) => {
    await unarchiveNote(id);
    navigate('/archives');
    locale === 'id' ? toast.success('Catatan Batal Diarsipkan') : toast.success('Note Has Been Unarchived');
  };

  const addNoteHandler = (title, body) => {
    addNote({ title, body });
    navigate('/');
    locale === 'id' ? toast.success('Catatan Berhasil Ditambahkan') : toast.success('Note Has Been Added');
  };

  const logoutHandler = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  const popupProfile = (event) => {
    event.stopPropagation();
    const popupContainer = document.querySelector('.popup-container');

    popupContainer.classList.toggle('show');
  };

  const body = document.querySelector('html');
  body.addEventListener('click', (event) => {
    event.stopPropagation();

    const popupContainer = document.querySelector('.popup-container.show');

    if (authedUser !== null && popupContainer !== null) {
      popupContainer.classList.remove('show');
    }

    return null;
  });

  useEffect(() => {
    const getData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    getData();
    document.documentElement.setAttribute('class', theme);
  }, [theme]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  if (initializing) {
    return (
      <Loading />
    );
  }

  if (authedUser === null) {
    return (
      <DataProvider value={localeContextValue}>
        <header className="bg-rose-200 dark:bg-zinc-900 dark:border-b-slate-50 dark:border-b-2 flex justify-between items-center px-4 h-16 md:px-12 lg:px-14 transition duration-500">
          <h1 className="md:text-3xl text-2xl font-bold text-rose-500 py-2 dark:text-slate-50">
            {locale === 'id' ? 'Aplikasi Catatan' : 'Note Apps'}
          </h1>
          <div className="relative flex justify-center items-center">
            <LanguageBtn />

            <SwitchButton />
          </div>
        </header>
        <main className="flex flex-col px-4 min-h-[700px] md:px-12 lg:px-14 bg-rose-100 dark:bg-zinc-800 transition duration-500">
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>

        </main>
      </DataProvider>
    );
  }

  return (
    <DataProvider value={localeContextValue}>
      <div className="bg-rose-100 dark:bg-zinc-800 transition duration-500">
        <Toaster position="top-right" reverseOrder={false} />
        <header className="bg-rose-200 dark:bg-zinc-900 dark:border-b-slate-50 dark:border-b-2 flex justify-between items-center px-4 h-16 md:px-12 lg:px-14 transition duration-500">
          <h1 className="md:text-3xl text-2xl font-bold text-rose-500 py-2 dark:text-slate-50">
            {locale === 'id' ? 'Aplikasi Catatan' : 'Note Apps'}
          </h1>
          <div className="popup-container relative flex justify-center items-center">
            <LanguageBtn />

            <SwitchButton />

            <button onClick={popupProfile}><FaUserCircle className="text-rose-500 dark:text-slate-50 text-3xl ml-4" /></button>
            <div className="pop-up flex-col items-start justify-start absolute top-[40px] right-0 bg-slate-50 p-2 rounded-md hidden">
              <div className="flex flex-row justify-center items-center font-bold text-rose-500 dark:text-zinc-800  mb-3">
                <FaUserCircle className="text-xl mr-2" />
                <p className="text-lg">{authedUser.name}</p>
              </div>
              <button onClick={logoutHandler} className="text-rose-500 dark:text-zinc-800  font-bold flex items-center justify-center ">
                <MdOutlineLogout className="text-2xl mr-2" />
                {' '}
                <span className="text-lg">{locale === 'id' ? 'Keluar' : 'Logout'}</span>
              </button>
            </div>

          </div>
        </header>
        <main className="flex flex-col px-4 min-h-[700px] md:px-12 lg:px-14">
          <Navigation />
          <Routes>

            {/* Route to Home Page */}
            <Route path="/" element={<HomePage keyword={keyword} keywordChange={onKeywordChangeHandler} />} />

            {/* Route to Archive Page */}
            <Route path="/archives" element={<ArchivePage keyword={keyword} keywordChange={onKeywordChangeHandler} />} />

            {/* Route to Detail Page */}
            <Route path="/notes/:id" element={<DetailPage onDelete={deleteHandler} onArchive={archiveHandler} onUnarchive={unarchiveHandler} />} />

            {/* Route to Add Page */}
            <Route path="/notes/add" element={<AddNotePage addNote={addNoteHandler} />} />

            {/* Route if page not exist */}
            <Route path="*" element={<NotFoundPage />} />

          </Routes>

        </main>
        <footer className="mt-5 bg-rose-500 py-3 dark:bg-zinc-900 dark:border-t-2 dark:border-t-slate-50 transition duration-500">
          <p className="font-bold text-slate-50 text-center text-sm">
            Created with
            <BsFillHeartFill className="inline" />
            {' '}
            by Refiandi Reza S
          </p>
        </footer>
      </div>

    </DataProvider>
  );
}

export default App;
