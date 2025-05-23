const countryCodes = [
    "ad", "ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar",
    "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be",
    "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq",
    "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd",
    "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr",
    "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm",
    "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu",
    "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb-eng", "gb-nir", "gb-sct",
    "gb-wls", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm",
    "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk",
    "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in",
    "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke",
    "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz",
    "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv",
    "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml",
    "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv",
    "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni",
    "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf",
    "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw",
    "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc",
    "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn",
    "so", "sr", "ss", "st", "sv", "sx", "sy", "sz", "tc", "td",
    "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr",
    "tt", "tv", "tw", "tz", "ua", "ug", "um", "us", "uy", "uz",
    "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xk",
    "ye", "yt", "za", "zm", "zw"
  ];


const countries = [
    "Andorra", "United Arab Emirates", "Afghanistan", "Antigua and Barbuda", "Anguilla", "Albania", "Armenia", "Angola", "Antarctica", "Argentina",
    "American Samoa", "Austria", "Australia", "Aruba", "Åland Islands", "Azerbaijan", "Bosnia and Herzegovina", "Barbados", "Bangladesh", "Belgium",
    "Burkina Faso", "Bulgaria", "Bahrain", "Burundi", "Benin", "Saint Barthélemy", "Bermuda", "Brunei Darussalam", "Bolivia, Plurinational State of",
    "Caribbean Netherlands", "Brazil", "Bahamas", "Bhutan", "Bouvet Island", "Botswana", "Belarus", "Belize", "Canada", "Cocos (Keeling) Islands",
    "Congo, the Democratic Republic of the", "Central African Republic", "Republic of the Congo", "Switzerland", "Côte d'Ivoire", "Cook Islands",
    "Chile", "Cameroon", "China (People's Republic of China)", "Colombia", "Costa Rica", "Cuba", "Cape Verde", "Curaçao", "Christmas Island", "Cyprus",
    "Czech Republic", "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic", "Algeria", "Ecuador", "Estonia", "Egypt", "Western Sahara",
    "Eritrea", "Spain", "Ethiopia", "Europe", "Finland", "Fiji", "Falkland Islands (Malvinas)", "Micronesia, Federated States of", "Faroe Islands",
    "France", "Gabon", "England", "Northern Ireland", "Scotland", "Wales", "United Kingdom", "Grenada", "Georgia", "French Guiana", "Guernsey",
    "Ghana", "Gibraltar", "Greenland", "Gambia", "Guinea", "Guadeloupe", "Equatorial Guinea", "Greece", "South Georgia and the South Sandwich Islands",
    "Guatemala", "Guam", "Guinea-Bissau", "Guyana", "Hong Kong", "Heard Island and McDonald Islands", "Honduras", "Croatia", "Haiti", "Hungary",
    "Indonesia", "Ireland", "Israel", "Isle of Man", "India", "British Indian Ocean Territory", "Iraq", "Iran, Islamic Republic of", "Iceland", "Italy",
    "Jersey", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "Kiribati", "Comoros", "Saint Kitts and Nevis",
    "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Cayman Islands", "Kazakhstan", "Laos (Lao People's Democratic Republic)",
    "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Monaco",
    "Moldova, Republic of", "Montenegro", "Saint Martin", "Madagascar", "Marshall Islands", "North Macedonia", "Mali", "Myanmar", "Mongolia", "Macao",
    "Northern Mariana Islands", "Martinique", "Mauritania", "Montserrat", "Malta", "Mauritius", "Maldives", "Malawi", "Mexico", "Malaysia",
    "Mozambique", "Namibia", "New Caledonia", "Niger", "Norfolk Island", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "Nauru", "Niue",
    "New Zealand", "Oman", "Panama", "Peru", "French Polynesia", "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Saint Pierre and Miquelon",
    "Pitcairn", "Puerto Rico", "Palestine", "Portugal", "Palau", "Paraguay", "Qatar", "Réunion", "Romania", "Serbia", "Russian Federation", "Rwanda",
    "Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan", "Sweden", "Singapore", "Saint Helena, Ascension and Tristan da Cunha", "Slovenia",
    "Svalbard and Jan Mayen Islands", "Slovakia", "Sierra Leone", "San Marino", "Senegal", "Somalia", "Suriname", "South Sudan", "Sao Tome and Principe",
    "El Salvador", "Sint Maarten (Dutch part)", "Syrian Arab Republic", "Kingdom of Eswatini", "Turks and Caicos Islands", "Chad",
    "French Southern Territories", "Togo", "Thailand", "Tajikistan", "Tokelau", "Timor-Leste", "Turkmenistan", "Tunisia", "Tonga", "Republic of Türkiye",
    "Trinidad and Tobago", "Tuvalu", "Taiwan (Republic of China)", "Tanzania, United Republic of", "Ukraine", "Uganda", "US Minor Outlying Islands",
    "United States", "Uruguay", "Uzbekistan", "Holy See (Vatican City State)", "Saint Vincent and the Grenadines", "Venezuela, Bolivarian Republic of",
    "Virgin Islands, British", "Virgin Islands, U.S.", "Vietnam", "Vanuatu", "Wallis and Futuna Islands", "Samoa", "Kosovo", "Yemen", "Mayotte",
    "South Africa", "Zambia", "Zimbabwe"
  ];

const container = document.getElementById('flags-container');

countryCodes.forEach((code, index) => {
  const countryName = countries[index];

  const figure = document.createElement('figure');

  const img = document.createElement('img');
  img.src = `flags/${code}.svg`;
  img.alt = `${countryName} flag`;
  img.onerror = () => {
    figure.remove(); 
  };

  const caption = document.createElement('figcaption');
  caption.textContent = countryName;

  figure.appendChild(img);
  figure.appendChild(caption);
  container.appendChild(figure);
});
  
