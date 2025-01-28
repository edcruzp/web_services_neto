//package neto.web.indicadores.venta.servlet;
//
//import java.io.FileReader;
//import java.security.KeyPair;
//import java.security.Security;
//import java.security.interfaces.RSAPrivateKey;
//
//import javax.crypto.Cipher;
//
//import neto.sion.genericos.log.Logeo;
//import org.apache.commons.codec.binary.Base64;
//import org.apache.commons.codec.binary.Hex;
//import org.bouncycastle.openssl.PEMDecryptorProvider;
//import org.bouncycastle.openssl.PEMEncryptedKeyPair;
//import org.bouncycastle.openssl.PEMParser;
//import org.bouncycastle.openssl.jcajce.JcaPEMKeyConverter;
//import org.bouncycastle.openssl.jcajce.JcePEMDecryptorProviderBuilder;
//
//public class RSA {
//
//	
//	private KeyPair getKeyPairPEM() throws Exception {
//	    FileReader fileReader = new FileReader("/Users/yruizm/Desktop/Antonio/workspaces/workspaceIntegracionHome/WebIndicadoresVenta/WebContent/resources/clave.pem");
//	    PEMParser pemParser = new PEMParser(fileReader);
//	    Object pemKeyPair = (Object) pemParser.readObject();
//	    PEMDecryptorProvider decProv = new JcePEMDecryptorProviderBuilder().build("WebIndicadoresVenta".toCharArray());
//	    JcaPEMKeyConverter converter = new JcaPEMKeyConverter();
//	    KeyPair keyPair = converter.getKeyPair(((PEMEncryptedKeyPair)pemKeyPair).decryptKeyPair(decProv));
//	    //pemParser.close();
//	    return keyPair;
//	 }
//	
//	public static void main(String args[]) {
//		RSA obj = new RSA();
//		try {
//		    Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
////		    Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding", "BC");
//		    Cipher cipher = Cipher.getInstance("RSA/None/OAEPWithSHA-1AndMGF1Padding", "BC");
//		    KeyPair ks = obj.getKeyPairPEM();
//		    RSAPrivateKey privKey = (RSAPrivateKey) ks.getPrivate();
//		    byte[] cipherText = Hex.decodeHex(("031a4db751015ae868902ede8111ac2e008303875feae7a68b5f2f9ad6fce0961b8ce70bba626ef53cb3d2b42aa74bdeca2b08715debfa0" +
//		    		"f2cb62d36d0ccc5e092269b2be7bce26c30148b3bae61dd87bb9fe9d4d1c29f453c1df84dd15ce93631f8230152ab1b176c433499b29fbc2f50c399739c5b82dca030bea5d6f" +
//		    		"7290c747a4a84696a07d411a967b12f772e28e667b105b67ed801a0f056c552b2db397d904a97e7dcd4186ee77988614629f5ce521031a330af4bea2d86ac4b5c0127cbc1fed7" +
//		    		"a3873f202f2ff72e84192603a23d8b70ec539e8cb7078ae62d0af27b09e13edbc2353e68828fe7808cf642564eb75d55c1e899ad4571d60ee254cfa2d44ff17c073b2f2948d5ea" +
//		    		"b2f355011c63ca40ca185fb58154867aad044af4cfbdab30bee4e5e9a2044cf911c632aa5f3731713f9b424f7aac598b932af7a450d1d6cfd39fc680768d1ed5e5ccae37f987b10e" +
//		    		"276fbd42923e81fc2b479f8f342965d1c8440aebf2a87016bdb7640277203b21709f4cdfe16ca558cccd256200ab1dca98f9255c26be317902813b664cca9c16f516570277ccb8a8f7" +
//		    		"ef118bbefaa37438ca05b8b5b01998fa90d62986575060392e33ad539a8361f7168228b7d33198139972083af5e6d955de982e663803a188910f22a20ff7750114dcfa2ab606182cf8" +
//		    		"aa416cf581ff5fde71f272d76775274a65125a1ba65bbb59a7ec7bf391d2bddbfee3dad360ce41e0cf7e8731139f7c75548da24e5a358523bd4d7eddcba0833e2626c0810d105103210" +
//		    		"5334bfa67589d7430b6fdd0002c6d6893e27f471362faaca61198f6dcaac9352cd8592d07132b2d1077a64ed4f219793a5c84d224e374ae06fb7f3f53018af76c3ec70f4d0a501bfb5" +
//		    		"a8e03665577642b79a2e64eaa39b55101d84205051c5489eca1984e60ed05e383d0195c7023ae716f82b08a1700293d7dbb2e4ca1feee70a312e0af56348383d2d708d435eecf4b47ae" +
//		    		"c21e5dce4965e5102cbb82ea158898593f1e89b29319e34a8eba672cc295bd4d171a068145df9fd60bc35f23b50a95d2373d1e3f9bea410947355cd6d6283cb2ebc1cfc756de41bcb31"+
//		    		"e360d4239f713eaa18eb43f07a88fbb1b709677deb9ac189de986b12482305e0f0468b11957726e49b8b7a7c013dc99cd159b09864ee23d95a419e60cc9f5ac21419e50ae6c1e8e500b3" +
//		    		"f2177bb9dcf4e486eb7b7de41511d96e0927a64eb7881dfe15f63075d2b49d4e7aef02fe5a31035fe7bdc2e92f56ec7748f9287639e4f74ae2b1671ff6ef3bfc3dbb2b5e1ee560eb26ae2" +
//		    		"8e330dff19bfb227d5d2131e630e7340cd0b52d0c2108752860315fbbb890aa15696a117993ee1d16750718d03fc667c578fb4d4b461051f8c301d15729d9442ebfd3287e867638048507" +
//		    		"04dca182be26e6a8f7ca888b1b21f8befc4f35563dd088fa3c00da59d4c1c3d5f4fce8d27e66a09913ba0fa329db416e207e31c1c47fa9e0ae5d46770438767e03d9b143404fe14494ff" +
//		    		"bc4003618599e9d8e1f10b55d2382a894d8cad67c4c21509b5e44cfcec44b0a6bdf878dcb8781bf8bca3e0de1dae3066ffc97901e77fc36efe48670a83cc4ada95fdbdbaed2c99f47763aa" +
//		    		"13ee6c911667f7d0d675861e0207a63d2a2575ed2fd53f9a3bd17095221295a3d0464d9b6c520c4767af892af78715fc641fbbe6b30189c2ee1f80d9c202b9018a0a45ae47dcd2fe4e9f54" +
//		    		"5347c18adcd1fced7405e0bc79d190e648c6cb41da7e126f2cc0820756a10f633b116eb4c6de3f934e7a2cb91cc6e1ee31a3b20c9d8e8e7a2f7ba9d06034ec4d6e7c55c5df22876b0aad177" +
//		    		"365d108431d548f58bb3b9efdc7244faa621e244f34f47856961bfd54038cf5c7523b914bf0d3a0d9c3c3938dae3f43644feb8dd14f98148775a36fd52e51ad355b66107285240d7a689a" +
//		    		"9cbd4d4c445466c302d3ad5a523937ca40375120b8ac6207d7e12805d997c3906818fb9d4af3d3f6b840affa0e35ec9ee012fea8dbee51b35a79cdb27b5f0b6f6db4ca5cca1b0a98dd044" +
//		    		"a55488f1631b22ea179e1489ad3cc387e6c42b139c60081ed24c1718e7959a251ca9248fd5b24b4e644aeb4be19e4d9d0742b603db3ff52a208caaeb0f6278acf8b334ea0d31ec40a86643b" +
//		    		"43f1bbc98e0b0bbd10a694ec4e73dd2964973045e5436bfa093964df68487b5dbfb321d07dfc8c1c40457e6b94ef074ef82739db0b37710a6090aa9a99c06fe60e1087f73bce7ed2b0e1ab" +
//		    		"8873788ac89ae3aea49e89cc755a0df795ae1516969eb7d72ed3e024778d5e848caab2560de09d8111bef4e211c241428494e89a9c92afe776c9c6cde5c7469c8d15468d85211e98686a1" +
//		    		"d291f4b95a08425bf6366941478a1f71a7f28e2d415790ea360ae3b9a59b28bcef4a79a715d806f24d661cb4eb74e90d6637faeb0dc5f4da68ed47c329b54b68d5a0806f79c63eb2f0e001" +
//		    		"f101fc0ab51bab7cf27133722174968f311bd60eda3e87f2da28ce269d0d442839036fc90651901bab5b722f3903da29149de48219bcebc5e6d72f6a639fbdf60bafffa6706ceb71f460a2" +
//		    		"432c2c25d0f75f44c23aa69ae1b5629c12973aad3fa8b221b999bdb0b2a5a4a76c47484aaefd70a4ab915793dd28b3ae951c5822b7f10d0b8ce18c5da625c4582ef398749610f3750438" +
//		    		"80aac0ec0561b416d3480ea0dd6ffc4c35de9d13905245d35cbe73d4dfb79b209f048ce3cb15f59d68b1e843d4a3cf695bb746ed6676e1b3353cc914f1baa67b6abbb1583fccb1f17980" +
//		    		"4793763cf9a1c9dd2a8d720ddd862f6df20c4ed4319f22dae2fce052a37ca6656e8d76e21dab11d65ed4ee7cce74cf0d217685f2ba5e8ea1d9d218f6e2eff62b224e48e433d3f34ca5c04" +
//		    		"6bbf6c594b6f1e63d2954ca079f972f4d0f7a1ac1b2466ad4db570fbcc53642ce2a90f27539c9fa5469b35c407e3955b7fbe386af49f031b0c7d54ae60cfec2f1faccf7c12c9abbf77ba1" +
//		    		"87f3440591526642785135e909701e5ad77d914ac93526f37c56e268e45fd762ae8c8a156727f637fa295d30e9674a045c8cd483817c148266f7b751027a353cac0870496709f31f0e811d" +
//		    		"f75e4b4bacf660ce9495c41fa3ce949f2330fb9ec56971fc5741f992eafcaa14cf2f164a8be6d83918ec904778cd471899c7334d0d7800cefb5da664f4cec4efe7ac5801f9070c48122c2" +
//		    		"0ba7f4d95a5b100aac8c3a27fee204ccc988a03d45183dc2d90873a9d147945151c680151bf64b84adc98aadbbddc2089b05be75228f4cbfbb5ea3f0e27315ffd9778b0f9989aa9aa9b1" +
//		    		"3c15f25a01d9dcecb7d142a86ee6a6f75d134a942ea24d8c1c2c5bd0f761bbde00874c4b982d04871723fdd7fffa248b3c68e6854ea8be1b1fc24ebdaddc0796b2393b283d3db7d385e7" +
//		    		"d7416f084fae2b7f425700b731fdbba0da592ea736962e27f1447979f688c487f75f627ada86157b990cc9cd1251f8d6104e22ffd25ee7b437fbd47b4452ef4c0032d749e36d82bdff98" +
//		    		"f9887189b385056c179776e1170f4028bf2c070b7fd623ae3cf").toCharArray());
//		    cipher.init(Cipher.DECRYPT_MODE, privKey);
//		    byte[] plain = cipher.doFinal(cipherText);
//		    String plainText = new String(Base64.decodeBase64(plain));
//		 } catch (Exception ex) {
//			Logeo.logearExcepcion(ex);
//		}
//	}
//}
