export const guestbook_entry_a1__url = '/guestbook/api/entries'
export const guestbook_entry__name__maxlength = 80
export const guestbook_entry__message__maxlength = 1000
export type guestbook_entry_T = {
	id:number
	name:string
	message:string
	/** ISO-8601 UTC timestamp. */
	created_at:string
}
export type guestbook_entry__input_T = Pick<guestbook_entry_T, 'name'|'message'>
/**
 * Validates a submitted guestbook entry.
 *
 * Shared by the browser form and the API so both reject the same input —
 * the browser copy is a convenience, the API copy is the one that counts.
 *
 * @returns an error message, or `null` when the entry is valid.
 */
export function guestbook_entry__validate(entry:Partial<guestbook_entry__input_T>) {
	const name = (entry.name ?? '').trim()
	const message = (entry.message ?? '').trim()
	if (!name) return 'Please enter your name.'
	if (name.length > guestbook_entry__name__maxlength) {
		return `Please keep your name under ${guestbook_entry__name__maxlength} characters.`
	}
	if (!message) return 'Please enter a message.'
	if (message.length > guestbook_entry__message__maxlength) {
		return `Please keep your message under ${guestbook_entry__message__maxlength} characters.`
	}
	return null
}
