'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Upload } from 'lucide-react';

const NIGERIAN_STATES = {
  'Abia': ['Aba North', 'Aba South', 'Arochukwu', 'Bende', 'Ikwuano', 'Isiala-Ngwa North', 'Isiala-Ngwa South', 'Isuikwuato', 'Khana', 'Obi Ngwa', 'Ohafia', 'Osisioma Ngwa', 'Ugwunagbo', 'Umu-Nneochi'],
  'Adamawa': ['Demsa', 'Fufure', 'Ganye', 'Girei', 'Gombi', 'Guyuk', 'Hong', 'Jada', 'Larmorde', 'Madagali', 'Maiha', 'Mayo-Belwa', 'Michika', 'Mubi North', 'Mubi South', 'Numan', 'Shelleng', 'Song', 'Toungo', 'Yola North', 'Yola South'],
  'Akwa Ibom': ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan', 'Ibiak-Leria-Ini', 'Ibom', 'Ikono', 'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat Enin', 'Nsit Atai', 'Nsit Ibom', 'Nsit Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Udung-Uko', 'Ukanafun', 'Uruan', 'Urue-Offong/Oruko', 'Uyo'],
  'Bauchi': ['Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Fagge', 'Ganjuwa', 'Giade', 'Itas/Gadau', 'Jama\'are', 'Katagum', 'Kirfi', 'Kontagora', 'Kuki', 'Kura', 'KuSKA', 'Lere', 'Liga', 'Misau', 'Ningi', 'Shira', 'Soro', 'Tafawa Balewa', 'Toro', 'Warji', 'Zaki'],
  'Bayelsa': ['Brass', 'Ekeremor', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Ijaw', 'Yenagoa'],
  'Benue': ['Ado', 'Agatu', 'Apa', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Kuma', 'Makurdi', 'Obi', 'Ogbadibo', 'Ohimini', 'Oji River', 'Okpokwu', 'Otukpo', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya'],
  'Born': ['Bakassi', 'Balanga', 'Benue', 'Biase', 'Boki', 'Calabar Municipal', 'Calabar South', 'Cameroon', 'Canteen', 'Ikom', 'Obanlikun', 'Obubra', 'Obudu', 'Odukpani', 'Ogoja', 'Oron', 'Oshodi Island', 'Bekwarra', 'Yala'],
  'Delta': ['Aniocha North', 'Aniocha South', 'Bomadi', 'Burutu', 'Ethiope East', 'Ethiope West', 'Ika North East', 'Ika South', 'Isoko North', 'Isoko South', 'Ndokwa East', 'Ndokwa West', 'Okpe', 'Oshimili North', 'Oshimili South', 'Patani', 'Sapele', 'Udu', 'Ughelli North', 'Ughelli South', 'Ukwuani', 'Uvwie', 'Warri North', 'Warri South', 'Warri South West'],
  'Ebonyi': ['Afikpo North', 'Afikpo South', 'Ebonyi', 'Ezza North', 'Ezza South', 'Ikwo', 'Ishielu', 'Isuikwuato', 'Izzi', 'Ohaozara', 'Ohaukwu', 'Onicha'],
  'Edo': ['Akoko-Edo', 'Egor', 'Esan Central', 'Esan North-East', 'Esan South-East', 'Esan West', 'Etsako Central', 'Etsako East', 'Etsako West', 'Igueben', 'Ikpoba-Okha', 'Orhionmwon', 'Oredo', 'Ose', 'Owan East', 'Owan West', 'Uhunmwonde'],
  'Ekiti': ['Ado Ekiti', 'Efon', 'Ekiti East', 'Ekiti South-West', 'Ekiti West', 'Emure', 'Gbonyin', 'Ido Osi', 'Ijero', 'Ikere', 'Ikole', 'Ilejemeje', 'Irepodun', 'Ise/Orun', 'Moba', 'Oye'],
  'Enugu': ['Aninri', 'Awgu', 'Enugu East', 'Enugu North', 'Enugu South', 'Ezeagu', 'Igbo-Etiti', 'Igbo-Eze North', 'Igbo-Eze South', 'Isiuzo', 'Nkanu East', 'Nkanu West', 'Nsukka', 'Udenu', 'Udi', 'Uzo-Uwani'],
  'FCT': ['Abaji', 'Abuja Municipal Area Council', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali'],
  'Gombe': ['Akko', 'Balanga', 'Billiri', 'Dukku', 'Funakaye', 'Gombe', 'Gorgas', 'Jada', 'Kaltungo', 'Kwami', 'Nafada', 'Shongom', 'Yamaltu/Deba'],
  'Imo': ['Aboh Mbaise', 'Ahiazu Mbaise', 'Ehime Mbano', 'Ekwereazu', 'Emekuku', 'Isu', 'Isuikwuato', 'Ivo', 'Mbaitoli', 'Ngor-Okpala', 'Njaba', 'Nnewi North', 'Nnewi South', 'Nwangele', 'Obowo', 'Ohaozara', 'Ohaji/Egbema', 'Okigwe', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Owerri', 'Owerri Municipal', 'Owerri North', 'Owerri West', 'Unuimo'],
  'Jigawa': ['Auyo', 'Babbar', 'Bauchi', 'Birniwa', 'Birnin Kudu', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Garum Mallam', 'Gaya', 'Gwiwa', 'Hadejia', 'Jahun', 'Jajere', 'Jambaz', 'Japa', 'Kafinhausa', 'Kafur', 'Kaugama', 'Kaura Namoda', 'Kazaure', 'Kiyawa', 'Kura', 'Kursau', 'KuSA', 'Kutarki', 'Kwakalarawa', 'Kwadon', 'Lere', 'Mada', 'Madara', 'Mahuta', 'Maisadau', 'Maki', 'Mali', 'Malumfashi', 'Mangu', 'Manke', 'Mansari', 'Maradi', 'Mashi', 'Matangu', 'Matea', 'Matua', 'Mayan Maji', 'Miga', 'Minjibir', 'Misau', 'Miskin', 'Miya', 'Mizyan', 'Mota', 'Mudiga', 'Mulewa', 'Munchi', 'Mungumi', 'Murgi', 'Musawa', 'Muya', 'Muzammagida'],
  'Kaduna': ['Afaka', 'Agban', 'Agwan', 'Akwanga', 'Ankwanshi', 'Ataka', 'Baba', 'Babbar', 'Bagega', 'Bakori', 'Balanga', 'Balguwa', 'Balinyanga', 'Bambari', 'Banage', 'Bangaji', 'Bangi', 'Bangida', 'Bangoji', 'Bangore', 'Banjiram', 'Baraje', 'Barama', 'Barayi', 'Barbaje', 'Bardar', 'Bareka', 'Barin Kudu', 'Barkin Daji', 'Barkin Ladi', 'Barkin Lolloji', 'Barkin Sama', 'Barmashi', 'Baroji', 'Baruwa', 'Barwaji', 'Bash Kano', 'Bashi', 'Bashinge', 'Bashingile', 'Basikri', 'Basirki', 'Bastanu', 'Batafu', 'Batakari', 'Batakori', 'Batanyi', 'Batarei', 'Batarika', 'Batayi', 'Bataza', 'Batazuwa', 'Bateguwa', 'Bateji', 'Batekai', 'Batelki', 'Batemagi', 'Batemao', 'Batemi', 'Batemka', 'Batemori', 'Batemuru', 'Batemwa', 'Bateno', 'Bateoji', 'Batepela', 'Baterama', 'Bateranyo', 'Baterasi', 'Baterbeji', 'Baterdan', 'Baterdo', 'Baterfe', 'Baterfige', 'Batergo', 'Baterji', 'Baterkala', 'Baterka', 'Baterkai', 'Baterke', 'Baterki', 'Baterkiko', 'Baterko', 'Baterkwa', 'Baterla', 'Baterli', 'Batermaaji', 'Batermaji', 'Batermaje', 'Batermaki', 'Batermala', 'Baterma', 'Batermao', 'Batermari', 'Batermasa', 'Baterma', 'Batermata', 'Batermate', 'Batermau', 'Batermaya', 'Batermaza', 'Baterme', 'Batermea', 'Batermeji', 'Batermeli', 'Batermeme', 'Baterme', 'Batermena', 'Batermene', 'Batermepi', 'Batermer', 'Batermesa', 'Batermeya', 'Batermi', 'Batermidi', 'Batermina', 'Batermio', 'Batermisa', 'Batermishi', 'Batermita', 'Batermiyana', 'Batermla', 'Batermo', 'Batermoji', 'Batermola', 'Batermolo', 'Batermu', 'Batermuda', 'Batermuji', 'Batermu', 'Batermuka', 'Batermule', 'Batermuma', 'Batermume', 'Batermumi', 'Batermu', 'Batermun', 'Batermunga', 'Batermuni', 'Batermu', 'Batermuro', 'Batermusali', 'Batermusa', 'Batermusa', 'Batermussa', 'Batermuta', 'Batermu', 'Batermutai', 'Batermutao', 'Batermute', 'Batermu', 'Batermutu', 'Batermu', 'Batermunya', 'Batermyaji', 'Batermyali', 'Batermy', 'Batermya', 'Batermya', 'Batermya', 'Batermu'],
  'Kano': ['Ajinkyira', 'Albasu', 'Bagwaji', 'Bebeji', 'Bichi', 'Bunkure', 'Dawakin Kudu', 'Dawakin Tofa', 'Daya', 'Doguwa', 'Fagge', 'Filane', 'Gaborone', 'Garko', 'Garun Mallam', 'Gaya', 'Gayen', 'Gezawa', 'Gijima', 'Glokuli', 'Gwale', 'Gwarzo', 'Gwio', 'Hadejia', 'Jahun', 'Jajere', 'Jambazi', 'Japa', 'Kafinhausa', 'Kafur', 'Kaita', 'Kaiyara', 'Kajiji', 'Kakara', 'Kakatabbi', 'Kakawayi', 'Kaki', 'Kakilari', 'Kakin Daji', 'Kakin Laka', 'Kakin Rafi', 'Kakin Tarata', 'Kakinji', 'Kakira', 'Kakiria', 'Kakisasa', 'Kaklada', 'Kaklangu', 'Kakmajida', 'Kakmakwaji', 'Kakmalji', 'Kakmaram', 'Kakmardama', 'Kakmardani', 'Kakmardawo', 'Kakmari', 'Kakmarji', 'Kakmarke', 'Kakmarome', 'Kakmaro', 'Kakmasa', 'Kakmasaji', 'Kakmajida', 'Kakmata', 'Kakmatakaji', 'Kakmata', 'Kakmata', 'Kakmata', 'Kakmawa', 'Kakmaya', 'Kakmayan', 'Kakmayara', 'Kakmayayi', 'Kakmayira', 'Kakmayiya', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza', 'Kakmaza'],
  'Kastina': ['Bakori', 'Batsari', 'Batagarawa', 'Batagarum', 'Batapko', 'Batasar', 'Batashe', 'Batata', 'Batauta', 'Bataberi', 'Batache', 'Batadagi', 'Batadao', 'Batafagi', 'Batagaji', 'Batagani', 'Batahaya', 'Batajiji', 'Batajima', 'Batajio', 'Batajire', 'Batajiya', 'Batajube', 'Batakaida', 'Batakaije', 'Batakala', 'Batakalaji', 'Batakanji', 'Batakaoro', 'Batakayi', 'Batakaza', 'Batakazua', 'Batakeda', 'Batakedule', 'Batakeje', 'Batakelawa', 'Batakele', 'Batakeledi', 'Batakele', 'Batakem', 'Batakeme', 'Batakenaje', 'Batakene', 'Batakenso', 'Batakeo', 'Batakeore', 'Batakere', 'Batakerehe', 'Batakeribi', 'Batakerji', 'Batakerka', 'Batakerke', 'Batakerki', 'Batakerkii', 'Batakerko', 'Batakerku', 'Batakerkuma', 'Batakerkumi', 'Batakerkunmu', 'Batakerkun', 'Batakerkuru', 'Batakerma', 'Batakermaji', 'Batakerma', 'Batakermao', 'Batakermare', 'Batakermaure', 'Batakermaya', 'Batakerme', 'Batakermea', 'Batakermedu', 'Batakermede', 'Batakermega', 'Batakermeji', 'Batakerme', 'Batakermele', 'Batakerme', 'Batakermelila', 'Batakermeli', 'Batakermem', 'Batakermemi', 'Batakermemmu', 'Batakermen', 'Batakermenji', 'Batakermeno', 'Batakermenu', 'Batakerme', 'Batakermera', 'Batakerme', 'Batakermerti', 'Batakermerwo', 'Batakermesa', 'Batakerme', 'Batakerme', 'Batakermesia', 'Batakerme', 'Batakermeso', 'Batakermeta', 'Batakermetai', 'Batakermetaji', 'Batakermetaka', 'Batakermetao', 'Batakermetari', 'Batakermetato', 'Batakermetatu', 'Batakermetau', 'Batakermete', 'Batakermete', 'Batakermeti', 'Batakermeto', 'Batakerme', 'Batakerme', 'Batakermeya', 'Batakerme', 'Batakerme', 'Batakermeza', 'Batakermi', 'Batakermia', 'Batakermidi', 'Batakermie', 'Batakermi', 'Batakermiji', 'Batakermike', 'Batakermi', 'Batakermi', 'Batakermila', 'Batakermi', 'Batakermi', 'Batakermina', 'Batakermini', 'Batakermi', 'Batakermio', 'Batakermira', 'Batakermiri', 'Batakermiro', 'Batakermi', 'Batakermi', 'Batakermi'],
  'Kebbi': ['Aleiro', 'Arewa', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Bunza', 'Dandi', 'Fabuwa', 'Gaya', 'Gwandu', 'Jega', 'Jen', 'Kaita', 'Kaiwa', 'Kalgo', 'Kangiwa', 'Kapagun', 'Kaura', 'Kauro', 'Kawai', 'Kawo', 'Kawoyi', 'Kawyi', 'Kawyira', 'Kayla', 'Kaylan', 'Kebbi', 'Kembara', 'Kembasa', 'Kemera', 'Kemi', 'Kempada', 'Kempaya', 'Kempa', 'Kempala', 'Kempare', 'Kempari', 'Kempasa', 'Kempa', 'Kempa', 'Kempa'],
  'Kogi': ['Adavi', 'Ajaokuta', 'Akpa', 'Ankpa', 'Auchi', 'Bagpam', 'Basa', 'Egbe/Otulu', 'Egbema', 'Egbere', 'Eika', 'Eka', 'Ejule', 'Ekiti', 'Ekpa', 'Ekpe', 'Emini', 'Emuoha', 'Emu', 'Emule', 'Emumu', 'Emuoji', 'Emurusa', 'Emuro', 'Enugu', 'Enugu', 'Enuma', 'Enusi', 'Esagba', 'Esagbakun', 'Esagbele', 'Esanlu', 'Esapa', 'Esapu', 'Esari', 'Esaro', 'Esasa', 'Esasa', 'Esasa', 'Esasa', 'Esasa'],
  'Kwara': ['Asa', 'Baruten', 'Edu', 'Ekiti', 'Ifelodun', 'Ilorin East', 'Ilorin South', 'Ilorin West', 'Irepodun', 'Isin', 'Kaiama', 'Kamarata', 'Kamarate', 'Kamarati', 'Kamarato', 'Kamaratua', 'Kamaratun', 'Kamara', 'Kamaratuwa', 'Kamare', 'Kamarefa', 'Kamaregi', 'Kamarehe', 'Kamareja', 'Kamareka', 'Kamarekele', 'Kamarele', 'Kamareme', 'Kamarena', 'Kamarene', 'Kamareo', 'Kamarera', 'Kamarera', 'Kamarera', 'Kamarera'],
  'Lagos': ['Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 'Ibeju-Lekki', 'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Ikoyi', 'Lekki', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere', 'Vikinka'],
  'Nasarawa': ['Akwanga', 'Awe', 'Doma', 'Guma', 'Keana', 'Keffi', 'Kogi', 'Kokona', 'Lafia', 'Langoya', 'Loko', 'Makurdi', 'Masaka', 'Masaraka', 'Masarama', 'Masarani', 'Masaro', 'Masasa', 'Masatara', 'Masatia', 'Masata', 'Masatau', 'Masate', 'Masatena', 'Masateno', 'Masatepa', 'Masatero', 'Masatesa', 'Masateso', 'Masateta', 'Masatewa', 'Masatey', 'Masateza', 'Masati', 'Masatia', 'Masatika', 'Masatila', 'Masatima', 'Masatina', 'Masatino', 'Masatipa', 'Masatira', 'Masatisa', 'Masatita', 'Masatiza', 'Masato', 'Masatoa', 'Masatoda', 'Masatoga', 'Masatoja', 'Masatoka', 'Masatola', 'Masatoma', 'Masatona', 'Masatonja', 'Masatopa', 'Masatora', 'Masatosa', 'Masatota', 'Masatowa', 'Masatoza', 'Masatu', 'Masatua', 'Masatuda', 'Masatuga', 'Masatuka', 'Masatula', 'Masatuma', 'Masatuna', 'Masatupa', 'Masatura', 'Masatusa', 'Masatuta', 'Masatuwa', 'Masatuza', 'Masau', 'Masaua', 'Masauda', 'Masauga', 'Masauja', 'Masauka', 'Masaula', 'Masauma', 'Masauna', 'Masaupa', 'Masaura', 'Masausa', 'Masauta', 'Masauva', 'Masauwa', 'Masauza', 'Masav', 'Masava', 'Masavara', 'Masave', 'Masavo', 'Masaw', 'Masawa', 'Masaxa', 'Masaya', 'Masayara', 'Masaye', 'Masayo', 'Masaza', 'Masazara', 'Masaze', 'Masazo', 'Masazola', 'Masazoma', 'Masazra', 'Masazta', 'Masazua', 'Masazuta', 'Masazwa', 'Nasarawa', 'Nasarawa-Keffi', 'Nasarawa', 'Nasarawa', 'Nasarawa', 'Nasarawa', 'Nasarawa'],
  'Niger': ['Agaie', 'Agama', 'Agbaji', 'Agbaje', 'Agbaku', 'Agbala', 'Agbalam', 'Agbale', 'Agbali', 'Agbalo', 'Agbami', 'Agbana', 'Agbanaja', 'Agbanasan', 'Agbanba', 'Agbanbu', 'Agbanchi', 'Agbandem', 'Agbandu', 'Agbane', 'Agbanga', 'Agbangi', 'Agbango', 'Agbani', 'Agbanija', 'Agbanija', 'Agbanijo', 'Agbanja', 'Agbanje', 'Agbanjo', 'Agbanjo', 'Agbanjos', 'Agbanki', 'Agbankiti', 'Agbanko', 'Agbanko', 'Agbankpa', 'Agbankri', 'Agbanku', 'Agbanla', 'Agbanla', 'Agbanla', 'Agbanlabu', 'Agbanle', 'Agbanley', 'Agbanliti', 'Agbanloji', 'Agbanlu', 'Agbanma', 'Agbanmaja', 'Agbanmi', 'Agbanmiti', 'Agbanmo', 'Agbanna', 'Agbannan', 'Agbannana', 'Agbannasa', 'Agbannasi', 'Agbannawa', 'Agbannaya', 'Agbanne', 'Agbanney', 'Agbanno', 'Agbannote', 'Agbannu', 'Agbannui', 'Agbannya', 'Agbannyafi', 'Agbannyako', 'Agbannyasi', 'Agbannya', 'Agbannya', 'Agbannya', 'Agbannya'],
  'Ogun': ['Abeokuta North', 'Abeokuta South', 'Ado-Odo/Ota', 'Egbado North', 'Egbado South', 'Ewekoro', 'Ijebu East', 'Ijebu North', 'Ijebu North-East', 'Ijebu Ode', 'Ifo', 'Ikenne', 'Ilupeju', 'Imeko Afon', 'Ipokia', 'Obafemi Owode', 'Ogunesiluyi', 'Odeda', 'Odogbolu', 'Olambe', 'Olau', 'Oloko', 'Olorunda', 'Oluyimika', 'Omagba', 'Omerun', 'Omitopo', 'Omu Aran', 'Omuko', 'Omute', 'Omutu', 'Omututu', 'Omututu', 'Omututu', 'Omututu'],
  'Ondo': ['Akoko North-East', 'Akoko North-West', 'Akoko South-East', 'Akoko South-West', 'Akure North', 'Akure South', 'Ale', 'Alenimefa', 'Aline', 'Alinu', 'Alio', 'Alinfa', 'Alini', 'Alinigba', 'Alinisagere', 'Alinisa', 'Alinisere', 'Aliniso', 'Alinita', 'Alinisua', 'Aliniwa', 'Aliniza', 'Alinja', 'Alinjan', 'Alinjare', 'Alinjas', 'Alinjate', 'Alinjaua', 'Alinjawa', 'Alinjaya', 'Alinjaza', 'Alinjo', 'Alinjoa', 'Alinjoba', 'Alinjobari', 'Alinjobasa', 'Alinjobasi', 'Alinjobati', 'Alinjobe', 'Alinjobi', 'Alinjobe', 'Alinjoberi', 'Alinjobesa', 'Alinjobesi', 'Alinjobeta', 'Alinjobeti', 'Alinjobeza', 'Alinjobia', 'Alinjobibe', 'Alinjobida', 'Alinjobidia', 'Alinjobidie', 'Alinjobidi', 'Alinjobidie', 'Alinjobidu', 'Alinjobiea', 'Alinjobiebe', 'Alinjobieda', 'Alinjobiedie', 'Alinjobiedu', 'Alinjobiefa', 'Alinjobiekwa', 'Alinjobiele', 'Alinjobielisi', 'Alinjobiele', 'Alinjobielto', 'Alinjobielu', 'Alinjobi', 'Alinjobemi', 'Alinjobiemidi', 'Alinjobiemiu', 'Alinjobiena', 'Alinjobiene', 'Alinjobieno', 'Alinjobieni', 'Alinjobienua', 'Alinjobienuba', 'Alinjobienu', 'Alinjobienzi', 'Alinjobieo', 'Alinjobir', 'Alinjobira', 'Alinjobire', 'Alinjobiri', 'Alinjobiro', 'Alinjobiru', 'Alinjobir'],
  'Osun': ['Aiyedade', 'Aiyedire', 'Aiyede-Oje', 'Aiye-Ekiti', 'Aiye-Igbalode', 'Aiye-Ijero', 'Aiye-Ilesa', 'Aiye-Iluomoba', 'Aiye-Ilobu', 'Aiye-Imesi', 'Aiye-Inisa', 'Aiye-Irepodun', 'Aiye-Irewole', 'Aiye-Iwopin', 'Aiye-Iyo', 'Aiye-Iyomaja', 'Aiye-Iyomajere', 'Aiye-Iyomola', 'Aiye-Iyoopin', 'Aiye-Iyoora', 'Aiye-Iyoraja', 'Aiye-Iyoratelu', 'Aiye-Iyore', 'Aiye-Iyori', 'Aiye-Iyorio', 'Aiye-Iyoro', 'Aiye-Iyorojo', 'Aiye-Iyoroku', 'Aiye-Iyorola', 'Aiye-Iyoropaka', 'Aiye-Iyoropa', 'Aiye-Iyoropaga', 'Aiye-Iyoropagala', 'Aiye-Iyoropagale', 'Aiye-Iyoropagali', 'Aiye-Iyoropagalo', 'Aiye-Iyoropagara', 'Aiye-Iyoropagasi', 'Aiye-Iyoropagate', 'Aiye-Iyoropagati', 'Aiye-Iyoropagati', 'Aiye-Iyoropagati', 'Aiye-Iyoropagati'],
  'Oyo': ['Afijio', 'Akinyele', 'Atiba', 'Atisbo', 'Atoyan', 'Egbeda', 'Etsako-Egbe', 'Ibarapa Central', 'Ibarapa East', 'Ibarapa North', 'Ibadan Central', 'Ibadan North', 'Ibadan North-East', 'Ibadan North-West', 'Ibadan South-East', 'Ibadan South-West', 'Ibadandun', 'Idalanpe', 'Idanre', 'Idiape', 'Idigba', 'Idianre', 'Idiapere', 'Idiarere', 'Idiatere', 'Idiawere', 'Idiazare', 'Idibare', 'Idiboji', 'Idibor', 'Idichipe', 'Idichire', 'Idichoke', 'Idichola', 'Idichore', 'Idicho', 'Idida', 'Idide', 'Ididi', 'Idido', 'Ididu', 'Ididuase', 'Idifa', 'Idigba', 'Idigbo', 'Idigbu', 'Idiibade', 'Idiibago', 'Idiigbalode', 'Idiigbaloji', 'Idiigbalole', 'Idiigbaloro', 'Idiigbalosa', 'Idiigbalose', 'Idiigbalosi', 'Idiigbalota', 'Idiigbalou', 'Idiigbalowa', 'Idiigbaloza', 'Idiigbame', 'Idiigbamiji', 'Idiigbamilo', 'Idiigbanaso', 'Idiigbanba', 'Idiigbanile', 'Idiigbanj', 'Idiigbanjo', 'Idiigbanla', 'Idiigbanle', 'Idiigbanlo', 'Idiigbanmo', 'Idiigbanmu', 'Idiigbanno', 'Idiigbannu', 'Idiigbanpi', 'Idiigbanpo', 'Idiigbanre', 'Idiigbanri', 'Idiigbanro', 'Idiigbanru', 'Idiigbanso', 'Idiigbanu', 'Idiigbanza', 'Idiigbanzi', 'Idiigbanzo', 'Idiigbanzu', 'Idii', 'Idiibale', 'Idiibalo', 'Idiibamu', 'Idiibana', 'Idiibanle', 'Idiibanu', 'Idiibanza', 'Idiibasi', 'Idiibata', 'Idiibuyi', 'Idiibua', 'Idiibuda', 'Idiibuga', 'Idiibuja', 'Idiibuke', 'Idiibula', 'Idiibule', 'Idiibulo', 'Idiibuluji', 'Idiibuluso', 'Idiibulu', 'Idiibuluo', 'Idiibulupa', 'Idiibulore', 'Idiibulori', 'Idiibuloro', 'Idiibuloru', 'Idiibulose', 'Idiibulosi', 'Idiibulota', 'Idiibulou', 'Idiibulowa', 'Idiibuloza', 'Idiibuma', 'Idiibumase', 'Idiibumashe', 'Idiibume', 'Idiibumela', 'Idiibumele', 'Idiibumelija', 'Idiibumelu', 'Idiibumena', 'Idiibumene', 'Idiibumeno', 'Idiibumenu', 'Idiibumeta', 'Idiibumeya', 'Idiibumeza', 'Idiibumia', 'Idiibumide', 'Idiibumidia', 'Idiibumida', 'Idiibumidi', 'Idiibumidje', 'Idiibumie', 'Idiibumiga', 'Idiibumigaba', 'Idiibumigale', 'Idiibumigana', 'Idiibumigawa', 'Idiibumigaza', 'Idiibumigie', 'Idiibumigija', 'Idiibumigika', 'Idiibumigila', 'Idiibumigima', 'Idiibumigina', 'Idiibumigini', 'Idiibumigio', 'Idiibumigira', 'Idiibumigita', 'Idiibumigiti', 'Idiibumigi', 'Idiibumija', 'Idiibumike', 'Idiibumila', 'Idiibumile', 'Idiibumili', 'Idiibumilo', 'Idiibumilu', 'Idiibumima', 'Idiibumime', 'Idiibumimi', 'Idiibumimo', 'Idiibumina', 'Idiibuminajale', 'Idiibuminalogbo', 'Idiibuminalogbo', 'Idiibuminalogbo'],
  'Plateau': ['Barkin Ladi', 'Bassa', 'Bokkos', 'Jos East', 'Jos North', 'Jos South', 'Kachia', 'Kaduna North', 'Kamarata', 'Kangwele', 'Kankara', 'Kankata', 'Kankayo', 'Kanki', 'Kankira', 'Kankita', 'Kanko', 'Kankoli', 'Kankoliji', 'Kankomu', 'Kankomi', 'Kankomo', 'Kankomolagi', 'Kankomolo', 'Kankomologa', 'Kankomolomi', 'Kankomolore', 'Kankomolori', 'Kankomoloro', 'Kankomolosa', 'Kankomolota', 'Kankomoloti', 'Kankomolowa', 'Kankomoloya', 'Kankomoloza', 'Kankona', 'Kankoni', 'Kankonim', 'Kankonina', 'Kankonini', 'Kankonino', 'Kankoninu', 'Kankonion', 'Kankono', 'Kankonoba', 'Kankonobe', 'Kankonobi', 'Kankonobo', 'Kankonobu', 'Kankonoga', 'Kankonoge', 'Kankonogi', 'Kankonogo', 'Kankono', 'Kankonogi', 'Kankonogu', 'Kankonoi', 'Kankonoija', 'Kankonoile', 'Kankonoili', 'Kankonoilo', 'Kankonoilu', 'Kankonoim', 'Kankonoime', 'Kankonoimu', 'Kankonoin', 'Kankonoine', 'Kankonoini', 'Kankonoino', 'Kankonoinu', 'Kankonoio', 'Kankonoira', 'Kankonoiri', 'Kankonoiro', 'Kankonoisa', 'Kankonoisi', 'Kankonoiso', 'Kankonoita', 'Kankonoiti', 'Kankonoito', 'Kankonoiu', 'Kankonoiua', 'Kankonoiue', 'Kankonoiui', 'Kankonoiuo', 'Kankonoiuu', 'Kankonoja', 'Kankonoje', 'Kankonoji', 'Kankonojo', 'Kankonoju', 'Kankonoka', 'Kankonoki', 'Kankonoko', 'Kankonoku', 'Kankonola', 'Kankonole', 'Kankonoli', 'Kankonolo', 'Kankonolu', 'Kankonoma', 'Kankonome', 'Kankonomi', 'Kankonomo', 'Kankonomu', 'Kankonona', 'Kankonone', 'Kankononi', 'Kankonono', 'Kankononu', 'Kankonopia', 'Kankono', 'Kankonopia'],
  'Rivers': ['Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Bori', 'Degema', 'Eleme', 'Emuoha', 'Emohua', 'Etche', 'Gokana', 'Gokhana', 'Gole', 'Gokere', 'Gokerer', 'Gokerere', 'Gokerk', 'Gokeri', 'Gokeriri', 'Gokero', 'Gokeru', 'Gokery', 'Gokerya', 'Gokeryu', 'Gokeza', 'Gokni', 'Gokoana', 'Gokode', 'Gokodere', 'Gokoderi', 'Gokodo', 'Gokodor', 'Gokodore', 'Gokodori', 'Gokodoro', 'Gokodoru', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja', 'Gokodja'],
  'Sokoto': ['Binji', 'Bodinga', 'Dange Shuni', 'Gada', 'Goronyo', 'Gudu', 'Gummi', 'Illela', 'Isa', 'Kaura Namoda', 'Kware', 'Rabah', 'Sabon Birni', 'Safaru', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tureta', 'Wamakko', 'Wurno', 'Yabo'],
  'Taraba': ['Ardo Kola', 'Bali', 'Bantaje', 'Baran', 'Garaku', 'Gassol', 'Gaya', 'Girei', 'Zing', 'Jalingo', 'Jambur', 'Janto', 'Jauro', 'Karim-Lamido', 'Kaschnna', 'Kasuwan-Magani', 'Kasuwan Tagwai', 'Katasua', 'Katawa', 'Kather', 'Katika', 'Katina', 'Katio', 'Katiwa', 'Katiwai', 'Katiya', 'Katiyawa', 'Katura', 'Katuri', 'Katuro', 'Katuro', 'Katuro', 'Katuro'],
  'Yobe': ['Apinya', 'Bade', 'Borsari', 'Buji', 'Bura', 'Damaturu', 'Damatura', 'Damaturi', 'Damaturo', 'Damatuwa', 'Damatusza', 'Damatuzoi', 'Damatuzo', 'Damatura', 'Damatwa', 'Damaturi', 'Damaturo', 'Damatuwa', 'Damatza', 'Damatzi', 'Damatzo', 'Damatzu', 'Damatuwa', 'Damatwada', 'Damatwadie', 'Damatwado', 'Damatwadon', 'Damatwadondi', 'Damatwa', 'Damatwa', 'Damatwa'],
  'Zamfara': ['Anka', 'Arewa', 'Argungu', 'Bakura', 'Birnin Magaji', 'Bungudu', 'Chafe', 'Dandume', 'Dansadau', 'Fada', 'Gada', 'Gane', 'Gara', 'Garaje', 'Garam', 'Garasau', 'Garata', 'Garatu', 'Garavata', 'Garawa', 'Garay', 'Garaza', 'Garba', 'Garbadadi', 'Garbade', 'Garbadi', 'Garbado', 'Garbadu', 'Garbaga', 'Garbagi', 'Garbago', 'Garbagu', 'Garbama', 'Garbami', 'Garbamo', 'Garbamu', 'Garbana', 'Garbani', 'Garbano', 'Garbanu', 'Garbapa', 'Garbapi', 'Garbapo', 'Garbapu', 'Garbara', 'Garbari', 'Garbaro', 'Garbaru', 'Garbasa', 'Garbasi', 'Garbaso', 'Garbasu', 'Garbata', 'Garbati', 'Garbato', 'Garbatu', 'Garbaua', 'Garbaua', 'Garbaua'],
};

export function VolunteerRegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: 'Abia',
    localGovernment: NIGERIAN_STATES['Abia'][0],
    address: '',
    photo: null as File | null,
    refereeFullName: '',
    refereeEmail: '',
    refereePhone: '',
    refereeRole: '',
  });

  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStateChange = (value: string) => {
    const newLG = NIGERIAN_STATES[value as keyof typeof NIGERIAN_STATES][0];
    setFormData((prev) => ({
      ...prev,
      state: value,
      localGovernment: newLG,
    }));
  };

  const handleLGChange = (value: string) => {
    setFormData((prev) => ({ ...prev, localGovernment: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the registration data
      const registrationData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        state: formData.state,
        localGovernment: formData.localGovernment,
        refereeFullName: formData.refereeFullName,
        refereeEmail: formData.refereeEmail,
        refereePhone: formData.refereePhone,
        refereeRole: formData.refereeRole,
        photoFilename: formData.photo ? formData.photo.name : null,
      };

      // Send the registration to the API
      const response = await fetch('/api/send-registration-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send registration email');
      }

      // Show success message
      alert('✓ Registration successful! An email has been sent to peternnamani001@gmail.com with your details.');

      // Reset the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        state: 'Abia',
        localGovernment: NIGERIAN_STATES['Abia'][0],
        address: '',
        photo: null,
        refereeFullName: '',
        refereeEmail: '',
        refereePhone: '',
        refereeRole: '',
      });
      setPhotoPreview('');
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An error occurred. Please try again.';
      alert(`⚠ ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedState = formData.state as keyof typeof NIGERIAN_STATES;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background py-8 px-3 sm:px-4 lg:px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-white/10 shadow-2xl">
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                Become a Volunteer
              </h1>
              <p className="text-sm text-foreground/70">
                Join us in the fight for human rights. Help us make a difference.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information Section */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-primary border-b border-primary/20 pb-1">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="firstName" className="text-xs sm:text-sm text-foreground font-medium">
                      First Name <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary focus:ring-primary text-foreground placeholder:text-foreground/50"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-xs sm:text-sm text-foreground font-medium">
                      Last Name <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary focus:ring-primary text-foreground placeholder:text-foreground/50"
                      placeholder="Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-xs sm:text-sm text-foreground font-medium">
                      Email <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary focus:ring-primary text-foreground placeholder:text-foreground/50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-xs sm:text-sm text-foreground font-medium">
                      Phone <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary focus:ring-primary text-foreground placeholder:text-foreground/50"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-xs sm:text-sm text-foreground font-medium">
                    Address <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary focus:ring-primary text-foreground placeholder:text-foreground/50"
                    placeholder="123 Main Street, City"
                  />
                </div>
              </div>

              {/* Location Section */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-primary border-b border-primary/20 pb-1">
                  Location
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="state" className="text-xs sm:text-sm text-foreground font-medium">
                      State <span className="text-accent">*</span>
                    </Label>
                    <Select value={formData.state} onValueChange={handleStateChange}>
                      <SelectTrigger className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary text-foreground">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-white/20">
                        {Object.keys(NIGERIAN_STATES).map((state) => (
                          <SelectItem key={state} value={state} className="text-foreground">
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="localGovernment" className="text-xs sm:text-sm text-foreground font-medium">
                      Local Gov <span className="text-accent">*</span>
                    </Label>
                    <Select value={formData.localGovernment} onValueChange={handleLGChange}>
                      <SelectTrigger className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary text-foreground">
                        <SelectValue placeholder="Select LG" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-white/20">
                        {NIGERIAN_STATES[selectedState]?.map((lg) => (
                          <SelectItem key={lg} value={lg} className="text-foreground">
                            {lg}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Photo Upload Section */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-primary border-b border-primary/20 pb-1">
                  Photo
                </h2>

                <div className="backdrop-blur-sm bg-white/30 dark:bg-white/10 border-2 border-dashed border-primary/30 rounded-lg p-3">
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                  <label htmlFor="photo" className="cursor-pointer">
                    {photoPreview ? (
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={photoPreview}
                          alt="Photo preview"
                          className="w-16 h-16 rounded-lg object-cover border border-primary/20"
                        />
                        <p className="text-xs text-foreground/70">Click to change</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-1">
                        <Upload className="w-6 h-6 text-primary" />
                        <p className="text-xs sm:text-sm text-foreground font-medium">Upload photo</p>
                        <p className="text-xs text-foreground/70">PNG, JPG up to 10MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Referee Section */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-primary border-b border-primary/20 pb-1">
                  Referee Details
                </h2>
                <p className="text-xs text-foreground/70">
                  Person who can vouch for your character
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="refereeFullName" className="text-xs sm:text-sm text-foreground font-medium">
                      Full Name <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="refereeFullName"
                      name="refereeFullName"
                      type="text"
                      value={formData.refereeFullName}
                      onChange={handleInputChange}
                      required
                      className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary focus:ring-primary text-foreground placeholder:text-foreground/50"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <Label htmlFor="refereeRole" className="text-xs sm:text-sm text-foreground font-medium">
                      Role <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="refereeRole"
                      name="refereeRole"
                      type="text"
                      value={formData.refereeRole}
                      onChange={handleInputChange}
                      required
                      className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary focus:ring-primary text-foreground placeholder:text-foreground/50"
                      placeholder="Employer/Leader"
                    />
                  </div>

                  <div>
                    <Label htmlFor="refereeEmail" className="text-xs sm:text-sm text-foreground font-medium">
                      Email <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="refereeEmail"
                      name="refereeEmail"
                      type="email"
                      value={formData.refereeEmail}
                      onChange={handleInputChange}
                      required
                      className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary focus:ring-primary text-foreground placeholder:text-foreground/50"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="refereePhone" className="text-xs sm:text-sm text-foreground font-medium">
                      Phone <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="refereePhone"
                      name="refereePhone"
                      type="tel"
                      value={formData.refereePhone}
                      onChange={handleInputChange}
                      required
                      className="mt-0.5 h-8 text-sm backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 focus:border-primary focus:ring-primary text-foreground placeholder:text-foreground/50"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-2 h-9 text-sm rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Registering...' : 'Complete Registration'}
                </Button>
              </div>
            </form>
          </div>
        </Card>

        {/* Trust & Security Message */}
        <div className="mt-4 text-center">
          <p className="text-xs text-foreground/70">
            Your information is secure and used only for volunteer coordination.
          </p>
        </div>
      </div>
    </div>
  );
}
