import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Anime {
  id: number;
  rank: number;
  title: string;
  titleJapanese: string;
  rating: number;
  year: number;
  episodes: number;
  genre: string[];
  description: string;
  popularity: number;
}

export default function Index() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedGenre, setSelectedGenre] = useState<string>('Все');

  const animeList: Anime[] = [
    {
      id: 1,
      rank: 1,
      title: 'Атака титанов',
      titleJapanese: 'Shingeki no Kyojin',
      rating: 9.2,
      year: 2013,
      episodes: 87,
      genre: ['Экшен', 'Драма', 'Фэнтези'],
      description: 'Человечество заключено за стеной, спасаясь от гигантских титанов. История борьбы за выживание и свободу.',
      popularity: 98
    },
    {
      id: 2,
      rank: 2,
      title: 'Тетрадь смерти',
      titleJapanese: 'Death Note',
      rating: 9.0,
      year: 2006,
      episodes: 37,
      genre: ['Триллер', 'Психология', 'Детектив'],
      description: 'Гениальный студент находит тетрадь, позволяющую убивать людей, записывая их имена.',
      popularity: 95
    },
    {
      id: 3,
      rank: 3,
      title: 'Стальной алхимик',
      titleJapanese: 'Fullmetal Alchemist: Brotherhood',
      rating: 9.1,
      year: 2009,
      episodes: 64,
      genre: ['Экшен', 'Приключения', 'Драма'],
      description: 'Два брата-алхимика ищут философский камень, чтобы вернуть свои тела после неудачного эксперимента.',
      popularity: 92
    },
    {
      id: 4,
      rank: 4,
      title: 'Ванпанчмен',
      titleJapanese: 'One Punch Man',
      rating: 8.7,
      year: 2015,
      episodes: 24,
      genre: ['Экшен', 'Комедия', 'Супергерои'],
      description: 'Самый сильный герой, способный победить любого врага одним ударом, скучает от отсутствия достойных соперников.',
      popularity: 94
    },
    {
      id: 5,
      rank: 5,
      title: 'Стейнс;Гейт',
      titleJapanese: 'Steins;Gate',
      rating: 9.0,
      year: 2011,
      episodes: 24,
      genre: ['Фантастика', 'Триллер', 'Драма'],
      description: 'Группа друзей случайно создаёт машину времени и попадает в водоворот временных парадоксов.',
      popularity: 88
    },
    {
      id: 6,
      rank: 6,
      title: 'Охотник × Охотник',
      titleJapanese: 'Hunter × Hunter',
      rating: 9.0,
      year: 2011,
      episodes: 148,
      genre: ['Приключения', 'Экшен', 'Фэнтези'],
      description: 'Мальчик отправляется в путешествие, чтобы стать Охотником и найти своего отца.',
      popularity: 90
    },
    {
      id: 7,
      rank: 7,
      title: 'Код Гиас',
      titleJapanese: 'Code Geass',
      rating: 8.8,
      year: 2006,
      episodes: 50,
      genre: ['Экшен', 'Меха', 'Драма'],
      description: 'Принц-изгнанник получает силу абсолютного подчинения и ведёт восстание против империи.',
      popularity: 91
    },
    {
      id: 8,
      rank: 8,
      title: 'Ковбой Бибоп',
      titleJapanese: 'Cowboy Bebop',
      rating: 8.9,
      year: 1998,
      episodes: 26,
      genre: ['Фантастика', 'Экшен', 'Драма'],
      description: 'Команда охотников за головами путешествует по космосу в поисках преступников и смысла жизни.',
      popularity: 85
    },
    {
      id: 9,
      rank: 9,
      title: 'Клинок, рассекающий демонов',
      titleJapanese: 'Kimetsu no Yaiba',
      rating: 8.7,
      year: 2019,
      episodes: 44,
      genre: ['Экшен', 'Фэнтези', 'Демоны'],
      description: 'Мальчик становится истребителем демонов, чтобы спасти свою сестру, превращённую в демона.',
      popularity: 97
    },
    {
      id: 10,
      rank: 10,
      title: 'Моб Психо 100',
      titleJapanese: 'Mob Psycho 100',
      rating: 8.6,
      year: 2016,
      episodes: 37,
      genre: ['Экшен', 'Комедия', 'Сверхспособности'],
      description: 'Застенчивый подросток с невероятными психическими способностями пытается жить обычной жизнью.',
      popularity: 87
    },
    {
      id: 11,
      rank: 11,
      title: 'Обещанный Неверленд',
      titleJapanese: 'Yakusoku no Neverland',
      rating: 8.5,
      year: 2019,
      episodes: 23,
      genre: ['Триллер', 'Психология', 'Тайна'],
      description: 'Дети из идеального приюта узнают ужасную правду и планируют побег из смертельной ловушки.',
      popularity: 89
    },
    {
      id: 12,
      rank: 12,
      title: 'Джоджо',
      titleJapanese: 'JoJo no Kimyou na Bouken',
      rating: 8.6,
      year: 2012,
      episodes: 190,
      genre: ['Экшен', 'Приключения', 'Сверхспособности'],
      description: 'Эпическая сага о династии Джостаров, сражающихся со злом через поколения.',
      popularity: 93
    },
    {
      id: 13,
      rank: 13,
      title: 'Евангелион',
      titleJapanese: 'Neon Genesis Evangelion',
      rating: 8.5,
      year: 1995,
      episodes: 26,
      genre: ['Меха', 'Психология', 'Драма'],
      description: 'Подростки пилотируют гигантских роботов для защиты человечества от загадочных Ангелов.',
      popularity: 86
    },
    {
      id: 14,
      rank: 14,
      title: 'Наруто: Ураганные хроники',
      titleJapanese: 'Naruto: Shippuden',
      rating: 8.4,
      year: 2007,
      episodes: 500,
      genre: ['Экшен', 'Приключения', 'Ниндзя'],
      description: 'Взрослый Наруто продолжает путь к мечте стать сильнейшим ниндзя и Хокаге своей деревни.',
      popularity: 96
    },
    {
      id: 15,
      rank: 15,
      title: 'Твоё имя',
      titleJapanese: 'Kimi no Na wa',
      rating: 8.8,
      year: 2016,
      episodes: 1,
      genre: ['Романтика', 'Драма', 'Фэнтези'],
      description: 'Мальчик и девочка из разных городов начинают таинственным образом меняться телами во сне.',
      popularity: 99
    }
  ];

  const allGenres = ['Все', ...Array.from(new Set(animeList.flatMap(anime => anime.genre)))];

  const filteredAnime = selectedGenre === 'Все' 
    ? animeList 
    : animeList.filter(anime => anime.genre.includes(selectedGenre));

  const getRatingColor = (rating: number) => {
    if (rating >= 9.0) return 'text-green-600';
    if (rating >= 8.5) return 'text-blue-600';
    if (rating >= 8.0) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const getRatingBg = (rating: number) => {
    if (rating >= 9.0) return 'bg-green-100 border-green-300';
    if (rating >= 8.5) return 'bg-blue-100 border-blue-300';
    if (rating >= 8.0) return 'bg-yellow-100 border-yellow-300';
    return 'bg-gray-100 border-gray-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header className="text-center space-y-4 py-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Icon name="Trophy" className="text-yellow-500" size={48} />
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              ТОП 15 АНИМЕ
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-medium">
            Лучшие аниме всех времён по версии критиков и зрителей
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
              className="gap-2"
            >
              <Icon name="Grid3x3" size={18} />
              Сетка
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              onClick={() => setViewMode('list')}
              className="gap-2"
            >
              <Icon name="List" size={18} />
              Список
            </Button>
          </div>
        </header>

        <div className="flex flex-wrap gap-2 justify-center">
          {allGenres.map((genre) => (
            <Badge
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                selectedGenre === genre
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
              }`}
            >
              {genre}
            </Badge>
          ))}
        </div>

        <div className={viewMode === 'grid' 
          ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
        }>
          {filteredAnime.map((anime, index) => (
            <Card 
              key={anime.id} 
              className={`border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                borderColor: anime.rank <= 3 ? '#fbbf24' : '#e5e7eb'
              }}
            >
              <div className={viewMode === 'list' ? 'flex w-full' : 'p-6 space-y-4'}>
                
                {viewMode === 'grid' && (
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black ${
                      anime.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                      anime.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
                      anime.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                      'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-800'
                    }`}>
                      #{anime.rank}
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full border-2 ${getRatingBg(anime.rating)}`}>
                      <Icon name="Star" className={`fill-current ${getRatingColor(anime.rating)}`} size={20} />
                      <span className={`font-bold text-lg ${getRatingColor(anime.rating)}`}>
                        {anime.rating}
                      </span>
                    </div>
                  </div>
                )}

                {viewMode === 'list' && (
                  <div className="flex items-center gap-4 p-4 w-full">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 ${
                      anime.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                      anime.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
                      anime.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                      'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-800'
                    }`}>
                      #{anime.rank}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-gray-900 truncate">{anime.title}</h3>
                          <p className="text-sm text-gray-500 italic truncate">{anime.titleJapanese}</p>
                        </div>
                        <div className={`flex items-center gap-1 px-3 py-1 rounded-full border-2 flex-shrink-0 ${getRatingBg(anime.rating)}`}>
                          <Icon name="Star" className={`fill-current ${getRatingColor(anime.rating)}`} size={18} />
                          <span className={`font-bold ${getRatingColor(anime.rating)}`}>
                            {anime.rating}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{anime.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {anime.genre.slice(0, 3).map((g) => (
                          <Badge key={g} variant="outline" className="text-xs">
                            {g}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {anime.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Film" size={14} />
                          {anime.episodes} эп.
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="TrendingUp" size={14} />
                          {anime.popularity}%
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {viewMode === 'grid' && (
                  <>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{anime.title}</h3>
                      <p className="text-sm text-gray-500 italic">{anime.titleJapanese}</p>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      {anime.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {anime.genre.map((g) => (
                        <Badge key={g} variant="outline" className="text-xs">
                          {g}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Icon name="Calendar" size={16} />
                          <span>{anime.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Icon name="Film" size={16} />
                          <span>{anime.episodes} серий</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Популярность</div>
                        <div className="text-2xl font-bold text-purple-600">{anime.popularity}%</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>

        {filteredAnime.length === 0 && (
          <div className="text-center py-16">
            <Icon name="SearchX" size={64} className="text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500">Аниме в этом жанре не найдено</p>
          </div>
        )}

        <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Icon name="Info" className="text-purple-600" size={24} />
              О рейтинге
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Система оценок:</strong> Рейтинги основаны на оценках пользователей популярных аниме-порталов (MyAnimeList, AniList, Shikimori).
              </p>
              <p>
                <strong>Критерии:</strong> Сюжет, анимация, саундтрек, персонажи, общее впечатление и культурное влияние.
              </p>
              <p className="flex items-center gap-2 flex-wrap">
                <span><strong>Легенда рейтингов:</strong></span>
                <Badge className="bg-green-100 text-green-700 border-green-300">9.0+ Шедевр</Badge>
                <Badge className="bg-blue-100 text-blue-700 border-blue-300">8.5+ Отлично</Badge>
                <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">8.0+ Хорошо</Badge>
              </p>
            </div>
          </div>
        </Card>

        <footer className="text-center text-gray-500 text-sm pt-8 border-t">
          <p>© 2024 ТОП Аниме. Рейтинг обновляется ежемесячно</p>
        </footer>
      </div>
    </div>
  );
}
