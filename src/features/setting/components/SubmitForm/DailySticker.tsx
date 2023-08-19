import { Controller } from 'react-hook-form';

import { stickerList, wordStickerText } from '../../constants';
import useSetting from '../../hooks/useSetting';

import '../../style/index.scss';

const DailySticker = () => {
  const { control } = useSetting();

  return (
    <div className="setting-sticker-container">
      <span className="setting-sticker-title">{wordStickerText}</span>
      <Controller
        name="mude"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div className="setting-sticker-box" {...field}>
            {stickerList.map((sticker) => (
              <label htmlFor={sticker} key={sticker}>
                <input
                  type="radio"
                  id={sticker}
                  name={field.name}
                  value={sticker}
                  checked={field.value === sticker}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                />
                <img
                  src={`/png/${sticker}.png`}
                  className="logo react"
                  alt="React logo"
                />
              </label>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default DailySticker;
