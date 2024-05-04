import { Model } from '@nozbe/watermelondb';
import { field, text } from '@nozbe/watermelondb/decorators';

export default class Account extends Model {
  static table = 'account';

  @text(name) name;
}
