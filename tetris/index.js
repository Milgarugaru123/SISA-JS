import { holdCase, tetrisScreen, nextCase, furtherNextCase } from "./query.js";
import {
  minoDatas,
  makeMino,
  gridDatas,
  hold,
  makeMinoBag,
  minoBag,
} from "./mino_datas.js";
import "./game.js";
import "./query.js";
import "./mino_datas.js";

/* init */

nextCase.appendChild(minoBag[0]);

Array(4)
  .fill(0)
  .forEach((x, i) => {
    const furtherNextMino = document.createElement(`div`);
    furtherNextMino.classList.add(`further_next_mino`);
    furtherNextCase.appendChild(furtherNextMino);
    furtherNextMino.append(minoBag[i + 1]);
  });

// furtherNextCase.appendChild();
