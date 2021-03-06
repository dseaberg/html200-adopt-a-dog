/* Shows the dog info in an alert. */
function showDogInfo(dogName, dogBreed, adoptionFee) {
  let infoMessage = 'Name: ' + dogName + '\nBreed: ' + dogBreed + '\nAdoption Fee: ' + adoptionFee;
  alert(infoMessage);
}

/* Add the dog's adoption fee to the total price. */
let totalPrice = 0;
function addDogToTotal(adoptionFee) {
  totalPrice += adoptionFee;
  $('#cart-total-main-page').text('$' + totalPrice);
}

const allDogData = {
  dogs: [
    {
      imageSource: './images/murphy-card.jpg',
      imageAltText: 'Facial shot of a brown-faced dog',
      name: 'Murphy',
      breed: 'Hound',
      bio: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
      cost: 23.54
    },
    {
      imageSource: './images/poppy-card.jpg',
      imageAltText: 'Front shot of a white dog walking',
      name: 'Poppy',
      breed: 'Terrier',
      bio: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
      cost: 73.21
    },
    {
      imageSource: './images/jack-card.jpg',
      imageAltText: 'Angle shot from above of a brown and white dog',
      name: 'Jack',
      breed: 'Malamute',
      bio: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
      cost: 33.9
    },
    {
      imageSource: './images/duffy-card.jpg',
      imageAltText: 'Facial shot of a white-faced dog',
      name: 'Duffy',
      breed: 'Bulldog',
      bio: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
      cost: 72.11
    },
    {
      imageSource: './images/lucas-card.jpg',
      imageAltText: 'Facial shot of a black-faced dog',
      name: 'Lucas',
      breed: 'Coonhound',
      bio: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
      cost: 42.74
    },
    {
      imageSource: './images/jake-card.jpg',
      imageAltText: 'Side facial shot of a tan dog',
      name: 'Jake',
      breed: 'Shepherd',
      bio: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
      cost: 90.37
    },
    {
      imageSource: './images/angus-card.jpg',
      imageAltText: 'Facial shot of a smiling, brown and black faced dog',
      name: 'Angus',
      breed: 'Spaniel',
      bio: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
      cost: 58.29
    },
    {
      imageSource: './images/duffy-card.jpg',
      imageAltText: 'Shot from above of a dark brown dog',
      name: 'Violet',
      breed: 'Beagle',
      bio: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
      cost: 32.51
    }
  ]
}

function addDogs() {
  console.log('Creating dog cards');
  const dogCardContainer = $('.profile-cards-main-page');
  for (let i = 0; i < allDogData.dogs.length; i++) {
    const dog = allDogData.dogs[i];
    dogCardContainer.append(
      '<div class="profile-card">' +
        '<img src="' + dog.imageSource + '" ' +
             'alt="' + dog.imageAltText + '" ' +
             'onclick="showDogInfo(\'' + dog.name + '\', \'' + dog.breed + '\', ' + dog.cost + ')">' +
        '<div class="profile-card-text">' +
          '<h3>' + dog.name + '</h3>' +
          '<p>' +
            '<span>Cost to Adopt:</span>' + dog.cost +
          '</p>' +
          '<p>' + dog.bio + '</p>' +
        '</div>' +
        '<button type="button" name="button" onclick="addDogToTotal(' + dog.cost + ')">Adopt</button>' +
      '</div>'
    );
  }
}

const allBlogData = {
  blogs: [
    {
      imageSource: './images/blog-1.jpg',
      imageAltText: 'Back-facing shot of a woman with a dog, and a scenic view in the background',
      title: 'Traveling With Your Dog',
      paragraphs: [
        'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
      ]
    },
    {
      imageSource: './images/blog-2.jpg',
      imageAltText: 'A group of dogs all on leashes',
      title: 'How to Walk Multiple Dogs',
      paragraphs: [
        'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
      ]
    },
    {
      imageSource: './images/blog-3.jpg',
      imageAltText: 'Black outline of a woman and a dog, with a red-orage sky in the background',
      title: 'Teach Your Dog To Fetch',
      paragraphs: [
        'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
      ]
    }
  ]
}

function addBlogs() {
  console.log('Creating blog elements');
  const blogsToAdd = [];
  for (let i = 0; i < allBlogData.blogs.length; i++) {
    const blog = createBlog(allBlogData.blogs[i]);
    blogsToAdd.push(blog);
  }

  console.log('Adding blog elements');
  const section = document.getElementById('blog-page-content');
  if (section !== null) {
    for (let i = 0; i < blogsToAdd.length; i++) {
      section.appendChild(blogsToAdd[i]);
    }
  }
}

function createBlog(blogData) {
  // 1. Create individual elements
  const blog = document.createElement('article');
  blog.className = 'blog';

  const blogImage = document.createElement('img');
  blogImage.src = blogData.imageSource;
  blogImage.alt = blogData.imageAltText;

  const blogContents = document.createElement('div');
  blogContents.className = 'blog-text';
  const blogTitle = document.createElement('h3');
  blogTitle.textContent = blogData.title;

  const blogTexts = [];
  for (let i = 0; i < blogData.paragraphs.length; i++) {
    const blogText = document.createElement('p');
    blogText.textContent = blogData.paragraphs[i];
    blogTexts.push(blogText);
  }

  // 2. Link the elements together
  blogContents.appendChild(blogTitle);
  for (let i = 0; i < blogTexts.length; i++) {
    blogContents.appendChild(blogTexts[i]);
  }

  blog.appendChild(blogImage);
  blog.appendChild(blogContents);

  return blog;
}

function setupFormHandling() {
  $('form').submit(function(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received.');

    // 1. Read form values
    const name = $('#name').val();
    const emailAddress = $('#email-address').val();
    const streetAddress = $('#street-address').val();
    const city = $('#city').val();
    const state = $('#state').val();
    const zipCode = $('#zip-code').val();
    const pickupLocation = $('#pickup-location').val();
    const firstTimeChoice = $('input[name="first-time-choice"]:checked').val();

    // 2. Construct the string
    let formValues = 'Name: ' + name + '\n';
    formValues += 'Email Address: ' + emailAddress + '\n';
    formValues += 'Street Address: ' + streetAddress + '\n';
    formValues += 'City: ' + city + '\n';
    formValues += 'State: ' + state + '\n';
    formValues += 'Zip Code: ' + zipCode + '\n';
    formValues += 'First Time: ' + firstTimeChoice + '\n';
    formValues += 'Pickup Location: ' + pickupLocation;

    console.log(formValues);
  });
}

$(function() {
  addDogs();
  addBlogs();
  setupFormHandling();

  $('.profile-card').hover(function() {
    $(this).css('border', 'red dashed 2px');
  }, function() {
    $(this).css('border', 'none');
  });
});
