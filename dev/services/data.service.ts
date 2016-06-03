import {Injectable} from '@angular/core';

@Injectable()

export class DataService
{
    private _data = ['Summer', 'Winter', 'Warm', 'Cold'];

    getRandomString()
    {
        let rdnNum = Math.floor( Math.random() * this._data.length );
        return this._data[rdnNum];
    }

    insert( value: string )
    {
        this._data.push( value );
    }

}